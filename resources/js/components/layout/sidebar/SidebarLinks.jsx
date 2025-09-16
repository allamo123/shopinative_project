import StoreIcon from '@material-ui/icons/Store';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import WebIcon from '@material-ui/icons/Web';
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import WeekendIcon from '@material-ui/icons/Weekend';
import StyleIcon from '@mui/icons-material/Style';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ReceiptIcon from '@material-ui/icons/Receipt';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';

export const SettingsNavigationLinks = [
    {
        label : 'General Configurations',
        icon: <StoreIcon fontSize='small' />,
        href: 'setup.index'
    },
    {
        label : 'Shipping Configurartions',
        icon: <LocalShippingIcon fontSize='small' />,
        href: 'tenant.home'
    },
    {
        label : 'Template Configurartions',
        icon: <WebIcon fontSize='small' />,
        href: 'tenant.home'
    },
];

export const MainSidebar = [
    {
        menu:[
            {
                label : 'home',
                icon: <HomeIcon fontSize='medium' />,
                href: 'tenant.home',
                hasParameter: false
            },
            {
                label : 'orders',
                icon: <LocalMallIcon fontSize='medium' />,
                sub: [
                    {
                        label: 'all_orders',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    },
                    {
                        label: 'new_order',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    },
                    {
                        label: 'abandoned_carts',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    },
                ]
            },
            {
                label : 'products',
                icon: <WeekendIcon fontSize='medium' />,
                hasParameter: false,
                sub: [
                    {
                        label: 'all_products',
                        icon: <ArrowCircleRightIcon fontSize='small' />
                    },
                    {
                        label: 'new_product',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    },
                    {
                        label: 'categories',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    },
                    {
                        label: 'reviews',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    },
                    {
                        label: 'inventory',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    },
                ]
            },
            {
                label : 'up_sells',
                icon: <StyleIcon fontSize='medium' />,
                hasParameter: false,
                sub: [
                    {
                        label: 'all_up_sells',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    },
                    {
                        label: 'new_sells',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    }
                ]
            },
            {
                label : 'coupons',
                icon: <LoyaltyIcon fontSize='medium' />,
                hasParameter: false,
                sub: [
                    {
                        label: 'all_coupons',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    },
                    {
                        label: 'new_coupon',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    },
                ]
            },
            {
                label : 'customers',
                icon: <PeopleAltIcon fontSize='medium' />,
                hasParameter: false,
                sub: [
                    {
                        label: 'all_customers',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    },
                    {
                        label: 'new_customer',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    },
                ]
            },
            {
                label : 'store',
                icon: <StorefrontIcon fontSize='medium' />,
                hasParameter: false,
                sub: [
                    {
                        label: 'theme',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    },
                    {
                        label: 'themes',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    },
                    {
                        label: 'menus',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    },
                    {
                        label: 'languages',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    },
                    {
                        label: 'pages',
                        icon: <ArrowCircleRightIcon fontSize='small' />

                    },
                    {
                        label: 'domains',
                        icon: <ArrowCircleRightIcon fontSize='small' />
                    },
                ]
            },
            {
                label : 'mobile_app',
                icon: <MobileFriendlyIcon fontSize='medium' />,
                href: 'temp',
                hasParameter: false,
            },
            {
                label : 'insights',
                icon: <TrendingUpIcon fontSize='medium' />,
                href: 'temp',
                hasParameter: false,
            },
            {
                label : 'invoices',
                icon: <ReceiptIcon fontSize='medium' />,
                href: 'temp',
                hasParameter: false,
            },
        ]
    },
];
