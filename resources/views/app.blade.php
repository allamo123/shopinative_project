<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Subscriber App</title>
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
        body {
            line-height: 0;
        }
        .MuiTable-root caption {
            left: auto !important;
            right: 0;
        }
        .MuiTableRow-head th, .MuiTableRow-head th button {
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
            right: auto;      /* reset default */
            left: 9px;        /* move arrow to the left side */
        }
    </style>
</head>
<body>
    @inertia
</body>
</html>
