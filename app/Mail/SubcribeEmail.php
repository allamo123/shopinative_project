<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Attachment;
use Barryvdh\DomPDF\Facade\Pdf;

class SubcribeEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $user, $plan, $domain, $path;

    public function __construct($user, $plan, $domain)
    {
        $this->user   = $user;
        $this->plan   = $plan;
        $this->domain = $domain;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Subscription Confirmation',
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.subscribe',
            with: [
                'user' => $this->user,
                'subscribtion' => $this->plan,
                'domain' => $this->domain,
            ]
        );
    }

    public function attachments(): array
    {
        return [
            //
        ];
    }
}
