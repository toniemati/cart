<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'user1',
            'email' => 'user1@email.com',
            'password' => '$2y$12$b2SypkDi1WbzuqSU2.0vT.bG49SS/dIMBEwcSkUjb8nlm2aAdILba'
        ]);

        User::create([
            'name' => 'user2',
            'email' => 'user2@email.com',
            'password' => '$2y$12$b2SypkDi1WbzuqSU2.0vT.bG49SS/dIMBEwcSkUjb8nlm2aAdILba'
        ]);

        User::create([
            'name' => 'admin',
            'email' => 'admin@email.com',
            'password' => '$2y$12$b2SypkDi1WbzuqSU2.0vT.bG49SS/dIMBEwcSkUjb8nlm2aAdILba'
        ]);
    }
}
