import { makeStyles } from "@material-ui/core";

export const SideBarNavigationStyle = makeStyles((theme) => ({
    scroll: {
        maxHeight: '87vh',
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
        columnGap: 4,
        paddingTop: '15px !important',
        paddingBottom: '15px !important',
        alignItems: 'center !important',
        transition: 'all 1s',
        '&:hover':{
            backgroundColor: '#45ccce3d',
            transition: 'all 1s',
        }
    },
    active: {
        backgroundColor: '#45ccce3d',
    },
    activeIcon: {
        color: `#121212 !important`
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
        fontWeight: 'bold'
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
