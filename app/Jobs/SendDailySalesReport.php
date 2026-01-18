<?php

namespace App\Jobs;

use App\Mail\DailySalesReport;
use App\Models\CartItem;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;

class SendDailySalesReport implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $today = now()->startOfDay();

        $items = CartItem::with('product')
            ->whereHas('cart', fn($q) => $q->where('status', 'completed')->whereDate('completed_at', $today))
            ->get();

        $soldItems = $items->groupBy(fn($item) => $item->product->id)
            ->map(fn($group) => [
                'name' => $group->first()->product->name,
                'quantity' => $group->sum('quantity'),
            ])
            ->values()
            ->toArray();

        $adminEmail = config('mail.admin_email', 'admin@email.com');

        Mail::to($adminEmail)->send(new DailySalesReport($soldItems));
    }
}
