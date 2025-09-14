import StoreIcon from '@material-ui/icons/Store';
import SpeedIcon from '@material-ui/icons/Speed';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import WebIcon from '@material-ui/icons/Web';
import HomeIcon from '@material-ui/icons/Home';

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
                icon: <HomeIcon fontSize='small' />,
                href: 'tenant.home',
                hasParameter: false
            },
            {
                label : 'Template',
                icon: <HomeIcon fontSize='small' />,
                href: 'setup.index',
                hasParameter: false
            },
        ]
    },
];
