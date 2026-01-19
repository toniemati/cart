<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateItemQuantityRequest;
use App\Models\Cart;
use App\Services\CartService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class CartController extends Controller
{
    public function __construct(
        protected CartService $cartService
    ) {
        //
    }

    public function index()
    {
        return Inertia::render('cart', [
            'canRegister' => Features::enabled(Features::registration()),
            'cart' => Cart::where('user_id', Auth::id())->where('status', 'active')->with(['items.product', 'user'])->first()
        ]);
    }

    public function count(): JsonResponse
    {
        $itemsCount = Auth::user()->cart->items()->count();

        return response()->json([
            'count' => $itemsCount
        ]);
    }

    public function add(int $productId)
    {
        $this->cartService->addItemToAuthUserCart($productId);
    }

    public function update(UpdateItemQuantityRequest $request, int $productId)
    {
        $validated = $request->validated();

        $this->cartService->updateProductQuantity($productId, $validated['quantity']);
    }

    public function order(int $cartId)
    {
        $this->cartService->processOrder($cartId);
    }
}
