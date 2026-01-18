<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Product extends Model
{
    protected $fillable = [
        'name',
        'price',
        'stock_quantity',
    ];

    protected $appends = [
        'in_cart'
    ];

    public function inCart(): Attribute
    {
        return Attribute::make(
            get: fn() => Auth::user()->cart->items->some(fn($item) => $item->product_id === $this->id),
        );
    }
}
