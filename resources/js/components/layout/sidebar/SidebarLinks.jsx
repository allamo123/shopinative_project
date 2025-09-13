import StoreIcon from '@material-ui/icons/Store';
import SpeedIcon from '@material-ui/icons/Speed';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import WebIcon from '@material-ui/icons/Web';

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
                label : 'Dashboard',
                icon: <SpeedIcon fontSize='small' />,
                href: 'tenant.home',
                hasParameter: false
            },
        ]
    },
];
