<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Invoice</title>
    <style>
        body { font-family: DejaVu Sans, sans-serif; font-size: 14px; }
        .invoice-box {
            max-width: 700px;
            margin: auto;
            padding: 30px;
            border: 1px solid #eee;
        }
        .title-container {
            margin-top: 20px;
        }
        .title { font-size: 24px; font-weight: bold; float: left; }
        .details { margin-top: 20px; }
        .details th, .details td { padding: 8px 10px; border-bottom: 1px solid #eee; }
        .logo-container: {
            text-align: 'left';
            padding: 10px 0;
            margin-bottom: 15px;
            margin-left: 6px
        }

        .badge {
            float:right;
            font-size: 12px;
            padding: 5px 10px;
            text-align: center;
            background-color: rgb(50, 165, 100);
            color: #fff;
            border-radius: 20px;
            font-weight: bold;
            text-transform: uppercase;
        }
        .clearfix {
            clear: both;
        }
    </style>
</head>
<body>
    <div class="invoice-box">
        <div class="logo-container">
            <img src="{{ public_path('images/logo.png') }}" width="185">
        </div>
        <div class="title-container">
            <div class="title">
                Subscription Invoice
            </div>
            <span class="badge">
                <small>paid</small>
            </span>
        </div>
        <div class="clearfix"></div>
        <p><strong>Invoice #:</strong> {{ $invoiceNumber }}</p>
        <p><strong>Date:</strong> {{ now()->format('d M Y') }}</p>
        <p><strong>Expiy Date:</strong> {{ $subscription->expire_date }}</p>
        <p><strong>To:</strong> {{ $user->first_name }} {{ $user->last_name }} ({{ $user->email }})</p>

        <div class="details">
            <table width="100%">
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>{{ $subscription->SubscriptionPlan->display_name }} Plan</td>
                    <td>{{ number_format($amount, 2) }} {{ config('app.currency', 'EGP') }}</td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>{{ number_format($amount, 2) }} {{ config('app.currency', 'EGP') }}</strong></td>
                </tr>
            </table>
        </div>
    </div>
</body>
</html>
