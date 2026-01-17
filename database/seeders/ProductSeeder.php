<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name' => 'Hat',
            'price' => 9.99,
            'stock_quantity' => 52,
        ]);

        Product::create([
            'name' => 'T-shirt',
            'price' => 14.99,
            'stock_quantity' => 76,
        ]);

        Product::create([
            'name' => 'Pants',
            'price' => 19.99,
            'stock_quantity' => 34,
        ]);

        Product::create([
            'name' => 'Shoes',
            'price' => 22.99,
            'stock_quantity' => 17,
        ]);

        Product::create([
            'name' => 'Belt',
            'price' => 7.99,
            'stock_quantity' => 26,
        ]);

        Product::create([
            'name' => 'Hoodie',
            'price' => 24.99,
            'stock_quantity' => 26,
        ]);

        Product::create([
            'name' => 'Socks',
            'price' => 2.99,
            'stock_quantity' => 66,
        ]);
    }
}
