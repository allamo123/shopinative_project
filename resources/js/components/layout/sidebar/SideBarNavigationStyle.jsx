import { colors, makeStyles } from "@material-ui/core";

export const SideBarNavigationStyle = makeStyles((theme) => ({
    scroll: {
        maxHeight: '87vh',
    },
    ul: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: '15px 6px !important'
    },
    groupTitle: {
        textTransform: 'capitalize'
    },
    link: {
        borderRadius: 21,
        marginBottom: 8,
        transition: 'all .2s',
        cursor: 'pointer',
        alignItems: 'flex-start !important',
        columnGap: 15,
        '&:hover':{
            transition: 'all .3s',
            '& .MuiTypography-root': {
                color: theme.palette.primary.main,
            },
            '& .MuiListItemIcon-root': {
                color: theme.palette.primary.main,
            }
        }
    },
    active: {
        backgroundColor: theme.palette.primary.light,
        color: '#fff',
        cursor: 'auto',
        '& .MuiSvgIcon-root': {
            color: '#fff'
        },
        '&:hover' : {
            '& .MuiTypography-root': {
                color: '#fff',
            },
        }
    },
    activeIcon: {
        color: `#fff !important`
    },
    ItemIcon: {
        minWidth: '0 !important',
    },
    shrinkSide: {
        padding: '10px !important',
        textAlign: 'center'
    },
    ListItemText: {
       textTransform: 'capitalize',
       color: theme.palette.text.primary,
       textAlign: 'justify',
       marginBottom: '0 !important',
       marginTop: '0 !important',
       fontWeight: '500 !important',
    },
    activeText: {
        color: '#fff',
        fontWeight: '800 !important',
    },
    IconButton: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        padding: 7,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        }
    }
}));

export const RtLSideBarNavigationStyle = makeStyles((theme) => ({
    scroll: {
        maxHeight: '87vh',
        '& .ps__rail-y': {
            left: '0 !important',
            right: 'auto !important',
        }
    },
    ul: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    groupTitle: {
        textTransform: 'capitalize'
    },
    link: {
        '&:hover':{
            backgroundColor: '#f5f5f5',
        }
    },
    active: {
        backgroundColor: '#45ccce3d',
    },
    ItemIcon: {
        minWidth: 35,
    },
    activeIcon: {
        color: theme.palette.primary.main
    },
    ListItemText: {
       textTransform: 'capitalize',
       color: theme.palette.text.primary,
       textAlign: 'justify',
       marginBottom: '0 !important',
       marginTop: '0 !important',
       fontWeight: '500 !important',
       fontSize: '1.08rem !important'
    },
    activeText: {
        color: '#121212',
        fontWeight: '800 !important',
    },
    IconButton: {
        backgroundColor: theme.palette.secondary.main,
        color: '#fff',
        padding: 7,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        }
    }
}));
