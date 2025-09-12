@component('mail::message')
# Thanks, {{ $user->first_name.' '.$user->last_name }} for Subscribing! 🎉

We’re excited to have you on board with the **{{ $subscribtion->display_name }}** plan.

Your account is now active on the domain:<br>
[https://{{ $domain }}/dashboard](https://{{ $domain }}/dashboard)

You can log in anytime using your email:
**{{ $user->email }}**

@component('mail::button', ['url' => 'https://'.$domain . '/dashboard'])
Dashboard Domain
@endcomponent

Thanks,
**shopinative**
@endcomponent
