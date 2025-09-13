import { colors, makeStyles } from "@material-ui/core";

export const SideBarNavigationStyle = makeStyles((theme) => ({
    scroll: {
        maxHeight: '87vh',
    },
    ul: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 8,
        border: '1px solid #ddd',
        padding: '15px !important'
    },
    groupTitle: {
        textTransform: 'capitalize'
    },
    link: {
        marginBottom: 8,
        transition: 'all 1s',
        cursor: 'pointer',
        '&:hover':{
            backgroundColor: '#f5f5f5',
            transition: 'all 1s',
        }
    },
    active: {
        backgroundColor: '#f5f5f5',
        color: '#121212',
        cursor: 'auto',
        borderRadius: 5,
        '& .MuiSvgIcon-root': {
            color: '#121212'
        }
    },
    activeIcon: {
        color: `#000 !important`
    },
    openIcon: {
        minWidth: '0 !important',
    },
    ListItemText: {
       textTransform: 'capitalize',
       color: theme.palette.text.primary,
       textAlign: 'justify',
       marginBottom: '0 !important',
       marginTop: '0 !important',
    },
    activeText: {
        color: '#121212',
        fontWeight: '700 !important',
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
    },
    activeText: {
        color: '#121212',
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
