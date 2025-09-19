<!DOCTYPE html>
<html class="no-js" lang="en">

<!-- belle/home2-default.html   11 Nov 2019 12:22:28 GMT -->

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>{{ $store_name }}</title>
    <meta name="description" content="description">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('themes/fashion/default/images/favicon.png') }}" />
    <!-- Plugins CSS -->
    <link rel="stylesheet" href="{{ asset('themes/fashion/default/css/plugins.css') }}">
    <!-- Bootstap CSS -->
    <link rel="stylesheet" href="{{ asset('themes/fashion/default/css/bootstrap.min.css') }}">
    <!-- Main Style CSS -->
    <link rel="stylesheet" href="{{ asset('themes/fashion/default/css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('themes/fashion/default/css/responsive.css') }}">
</head>

<body class="template-index home2-default">
    <div id="pre-loader">
        <img src={{asset("themes/fashion/default/images/loader.gif")}} alt="Loading..." />
    </div>
    <div class="pageWrapper">

        @include('themes.fashion.default.partials.header')

        @include('themes.fashion.default.partials.mobile-nav')

        <!--Body Content-->
        <div id="page-content">
            @yield('content')
        </div>
        <!--End Body Content-->
    </div>

    @include('themes.fashion.default.partials.footer')

    @include('themes.fashion.default.partials.utilities')

    <!-- Including Jquery -->
    <script src={{ asset('themes/fashion/default/js/vendor/jquery-3.3.1.min.js') }}></script>
    <script src={{ asset('themes/fashion/default/js/vendor/modernizr-3.6.0.min.js') }}></script>
    <script src={{ asset('themes/fashion/default/js/vendor/jquery.cookie.js') }}></script>
    <script src={{ asset('themes/fashion/default/js/vendor/wow.min.js') }}></script>
    <!-- Including Javascript -->
    <script src={{ asset('themes/fashion/default/js/bootstrap.min.js') }}></script>
    <script src={{ asset('themes/fashion/default/js/plugins.js') }}></script>
    <script src={{ asset('themes/fashion/default/js/popper.min.js') }}></script>
    <script src={{ asset('themes/fashion/default/js/lazysizes.js') }}></script>
    <script src={{ asset('themes/fashion/default/js/main.js') }}></script>
    <!--For Newsletter Popup-->
    <script>
        jQuery(document).ready(function() {
            jQuery('.closepopup').on('click', function() {
                jQuery('#popup-container').fadeOut();
                jQuery('#modalOverly').fadeOut();
            });

            var visits = jQuery.cookie('visits') || 0;
            visits++;
            jQuery.cookie('visits', visits, {
                expires: 1,
                path: '/'
            });
            console.debug(jQuery.cookie('visits'));
            if (jQuery.cookie('visits') > 1) {
                jQuery('#modalOverly').hide();
                jQuery('#popup-container').hide();
            } else {
                var pageHeight = jQuery(document).height();
                jQuery('<div id="modalOverly"></div>').insertBefore('body');
                jQuery('#modalOverly').css("height", pageHeight);
                jQuery('#popup-container').show();
            }
            if (jQuery.cookie('noShowWelcome')) {
                jQuery('#popup-container').hide();
                jQuery('#active-popup').hide();
            }

            // Swatch click handler
            jQuery('.swatches .swatch').on('click', function() {
                var rel = jQuery(this).attr('rel');
                // If rel contains Blade asset() output, extract the URL
                if (rel && rel.indexOf('asset(') !== -1) {
                    // Try to extract the URL from asset('...')
                    var match = rel.match(/asset\(['\"]([^'\"]+)['\"]\)/);
                    if (match && match[1]) {
                        // Laravel will output the full URL, so just use rel
                        rel = jQuery(this).attr('rel');
                    }
                }
                var item = jQuery(this).closest('.item');
                var productImage = item.find('.product-image img.primary');
                if (productImage.length && rel) {
                    productImage.attr('src', rel);
                    productImage.attr('data-src', rel);
                }
                var hoverImage = item.find('.product-image img.hover');
                if (hoverImage.length && rel) {
                    hoverImage.attr('src', rel);
                    hoverImage.attr('data-src', rel);
                }
            });
        });

        jQuery(document).mouseup(function(e) {
            var container = jQuery('#popup-container');
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.fadeOut();
                jQuery('#modalOverly').fadeIn(200);
                jQuery('#modalOverly').hide();
            }
        });

        /*--------------------------------------
        	Promotion / Notification Cookie Bar
          -------------------------------------- */
        if (Cookies.get('promotion') != 'true') {
            $(".notification-bar").show();
        }
        $(".close-announcement").on('click', function() {
            $(".notification-bar").slideUp();
            Cookies.set('promotion', 'true', {
                expires: 1
            });
            return false;
        });
    </script>
    <!--End For Newsletter Popup-->
</body>
