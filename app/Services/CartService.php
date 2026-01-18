<?php

namespace App\Services;

use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;

class CartService
{
    public function addItemToAuthUserCart(int $productId)
    {
        $user = Auth::user();

        $item = $user->cart->items()->where('product_id', $productId)->first();

        if ($item) {
            if ($item->quantity < $item->product->stock_quantity) {
                $item->update([
                    'quantity' => $item->quantity + 1
                ]);
            }
        } else {
            $user->cart->items()->create([
                'product_id' => $productId,
                'quantity' => 1
            ]);
        }
    }

    public function updateProductQuantity(int $productId, int $quantity)
    {
        $cartId = Auth::user()->cart->id;

        $cartItem = CartItem::query()
            ->where('cart_id', $cartId)
            ->where('product_id', $productId)
            ->firstOrFail();

        $product = Product::find($productId);

        if ($quantity > $product->stock_quantity) {
            $quantity = $product->stock_quantity;
        }

        if (!$quantity || $quantity <= 0) {
            $cartItem->delete();
        } else {
            $cartItem->update(['quantity' => $quantity]);
        }
    }

    public function processOrder(int $cartId)
    {
        $cart = Cart::with(['items.product'])->find($cartId);

        foreach ($cart->items as $item) {
            $item->product->update(['stock_quantity' => $item->product->stock_quantity - $item->quantity]);
        }

        Cart::create([
            'user_id' => Auth::id()
        ]);

        $cart->update([
            'status' => 'completed',
            'completed_at' => now()
        ]);
    }
}
