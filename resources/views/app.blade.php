<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name') }}</title>

    <link rel="shortcut icon" href="/favicon.ico" />

    <!-- PNG icons for browsers and pinned tabs -->
    {{-- <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" /> --}}
    <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/fv-32x32.png" />
    {{-- <link rel="icon" type="image/png" sizes="48x48" href="/assets/icons/favicon-48x48.png" /> --}}

    <!-- Apple touch icon -->
    {{-- <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png" /> --}}

    <!-- Safari pinned tab (SVG) -->
    {{-- <link rel="mask-icon" href="/assets/icons/safari-pinned-tab.svg" color="#0a0a0a" /> --}}

    <!-- optional SVG favicon (scalable) -->
    {{-- <link rel="icon" href="/assets/icons/favicon.svg" type="image/svg+xml" /> --}}

    <!-- web app manifest -->

    <!-- Microsoft tile -->
    {{-- <meta name="msapplication-TileColor" content="#0a0a0a" /> --}}
    {{-- <meta name="msapplication-TileImage" content="/assets/icons/mstile-150x150.png" /> --}}

    <!-- theme color for mobile browsers -->
    <meta name="theme-color" content="#0a0a0a" />
    @viteReactRefresh
    @inertiaHead
    @routes
    @vite('resources/js/app.js');

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box
        }

        .MuiTable-root caption {
            left: auto !important;
            right: 0;
        }

        .MuiTableRow-head th,
        .MuiTableRow-head th button {
            font-size: 14px !important;
            text-transform: capitalize;
            padding: 6px 5px;
        }

        [class*="MUIDataTableToolbar-actions"] {
            text-align: end !important;
        }

        [dir="rtl"] .MuiTablePagination-actions {
            display: flex;
            flex-direction: row-reverse;
        }

        [dir="rtl"] .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-endAdornment {
            right: auto;
            /* reset default */
            left: 9px;
            /* move arrow to the left side */
        }
    </style>
</head>

<body>
    @inertia
</body>

</html>
