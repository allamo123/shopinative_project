import StoreIcon from '@material-ui/icons/Store';
import SpeedIcon from '@material-ui/icons/Speed';
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
                label : 'Home',
                icon: <HomeIcon fontSize='medium' />,
                href: 'tenant.home',
                hasParameter: false
            },
            {
                label : 'Orders',
                icon: <LocalMallIcon fontSize='medium' />,
                href: 'temp',
                hasParameter: false,
                sub: [
                    {
                        label: 'hello'
                    }
                ]
            },
            {
                label : 'Products',
                icon: <WeekendIcon fontSize='medium' />,
                href: 'temp',
                hasParameter: false,
                sub: [
                    {
                        label: 'hello'
                    }
                ]
            },
            {
                label : 'Up_sells',
                icon: <StyleIcon fontSize='medium' />,
                href: 'temp',
                hasParameter: false,
                sub: [
                    {
                        label: 'hello'
                    }
                ]
            },
            {
                label : 'Coupons',
                icon: <LoyaltyIcon fontSize='medium' />,
                href: 'temp',
                hasParameter: false,
                sub: [
                    {
                        label: 'hello'
                    }
                ]
            },
            {
                label : 'Customers',
                icon: <PeopleAltIcon fontSize='medium' />,
                href: 'temp',
                hasParameter: false,
                sub: [
                    {
                        label: 'hello'
                    }
                ]
            },
            {
                label : 'Insights',
                icon: <TrendingUpIcon fontSize='medium' />,
                href: 'temp',
                hasParameter: false,
                sub: [
                    {
                        label: 'hello'
                    }
                ]
            },
            {
                label : 'Invoices',
                icon: <ReceiptIcon fontSize='medium' />,
                href: 'temp',
                hasParameter: false,
                sub: [
                    {
                        label: 'hello'
                    }
                ]
            },
        ]
    },
];
