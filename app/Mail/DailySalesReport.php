<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class DailySalesReport extends Mailable
{
    use Queueable, SerializesModels;

    public $soldItems;

    public function __construct(array $soldItems)
    {
        $this->soldItems = $soldItems;
    }

    public function build()
    {
        return $this->subject('Daily Sales Report')
                    ->view('emails.daily_sales_report');
    }
}
