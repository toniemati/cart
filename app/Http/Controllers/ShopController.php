<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class ShopController extends Controller
{
    public function index()
    {
        return Inertia::render('shop', [
            'canRegister' => Features::enabled(Features::registration()),
            'products' => Product::all()
        ]);
    }
}
