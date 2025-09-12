<?php

namespace App\Listeners;

use App\Events\SubscriptionCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use App\Mail\SubcribeEmail;
use Barryvdh\DomPDF\Facade\Pdf;

class SendSubscriptionEmail
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(SubscriptionCreated $event): void
    {
        $user = $event->user;
        $subscription = $user->tenant->activeSubscription->first();
        $subscriptionPlan = $subscription->subscriptionPlan;
        $admin_domain = $user->tenant->domains()->where('type', 'admin')->first();

        $invoiceNumber = 'INV-' . now()->format('YmdHis');

        $pdf = Pdf::loadView('invoices.invoice', [
            'user' => $user,
            'subscription' => $subscription,
            'amount' => $subscription->price,
            'invoiceNumber' => $invoiceNumber,
        ]);

        Mail::to($user->email)->send(
            (new SubcribeEmail($user, $subscriptionPlan, $admin_domain->domain))
            ->attachData($pdf->output(), "invoice_{$invoiceNumber}.pdf", [
                'mime' => 'application/pdf',
            ])
        );
    }
}
