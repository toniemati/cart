<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('shop', function () {
        return Inertia::render('shop', [
            'canRegister' => Features::enabled(Features::registration()),
        ]);
    })->name('shop');

    Route::get('cart', function () {
        return Inertia::render('cart', [
            'canRegister' => Features::enabled(Features::registration()),
        ]);
    })->name('cart');
});

require __DIR__ . '/settings.php';
