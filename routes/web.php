<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ShopController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', fn() => Inertia::render('dashboard'))->name('dashboard');

    Route::get('shop', [ShopController::class, 'index'])->name('shop');

    Route::prefix('cart')->group(function () {
        Route::get('', [CartController::class, 'index'])->name('cart');
        Route::get('items/count', [CartController::class, 'count'])->name('cart.items.count');
        Route::post('add/{product}', [CartController::class, 'add'])->name('cart.add');
        Route::post('{product}/update', [CartController::class, 'update'])->name('cart.update');
        Route::post('{id}/order', [CartController::class, 'order'])->name('cart.order');
    });
});

require __DIR__ . '/settings.php';
