import React from 'react';
import CategoryIcon from '@material-ui/icons/Category';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SpeedIcon from '@material-ui/icons/Speed';
import PolymerIcon from '@material-ui/icons/Polymer';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

// export const SettingsNavigationLinks = [
//     {
//         title: 'user settings',
//         menu:[
//             {
//                 label : 'Account',
//                 icon: <AccountCircleOutlinedIcon fontSize='small' />,
//                 href: 'account.index'
//             },
//             {
//                 label : 'Wallet',
//                 icon: <CreditCardIcon fontSize='small' />,
//                 href: 'mywallet.index'
//             },
//             {
//                 label : 'password & secuirty',
//                 icon: <LockOutlinedIcon fontSize='small' />,
//                 href: 'account.secuirty'
//             },
//         ]
//     },
//     {
//         title: 'company settings',
//         menu:[
//             {
//                 label : 'company info',
//                 icon: <BusinessOutlinedIcon fontSize='small' />,
//                 href: 'company-info.index'
//             },
//             {
//                 label : 'domestic shipping zone',
//                 icon : <LocationOnIcon fontSize='small' />,
//                 href: 'domestic-shipping-zones.index'
//             },
//             {
//                 label : 'Packging Showcase',
//                 icon: <AspectRatioIcon fontSize='small' />,
//                 href: 'packaging.index'
//             },
//             {
//                 label : 'Transportation Types',
//                 icon: <CommuteIcon fontSize='small' />,
//                 href: 'transportation-types.index'
//             },
//             {
//                 label : 'tender settings',
//                 icon: <MonetizationOnOutlinedIcon fontSize='small' />,
//                 href: 'tender-settings.index'
//             },
//             // {
//             //     label : 'badges',
//             //     icon: <BrandingWatermarkOutlinedIcon fontSize='small' />,
//             //     href: 'company.dashboard'
//             // }
//         ]
//     },
// ];

export const MainSidebar = [
    {
        menu:[
            {
                label : 'Dashboard',
                icon: <SpeedIcon fontSize='small' />,
                href: 'tenant.home',
                hasParameter: false
            },
            // {
            //     title: 'Shop Configurations'
            // },
            // {
            //     label : 'Branding',
            //     icon: <PolymerIcon fontSize='small' />,
            //     href: 'shop.branding',
            //     hasParameter: false
            // },
            // {
            //     label : 'Categories',
            //     icon: <CategoryIcon fontSize='small' />,
            //     href: 'categories.index',
            //     hasParameter: false
            // },
            // {
            //     label : 'Tags',
            //     icon: <LoyaltyIcon fontSize='small' />,
            //     href: 'tags.index',
            //     hasParameter: false
            // },
            // {
            //     label : 'Offers',
            //     icon: <LocalOfferIcon fontSize='small' />,
            //     href: 'offers.index',
            //     hasParameter: false
            // },
            // {
            //     label : 'Products',
            //     icon: <AddShoppingCartIcon fontSize='small' />,
            //     href: 'products.index',
            //     hasParameter: false
            // },
        ]
    },
];
