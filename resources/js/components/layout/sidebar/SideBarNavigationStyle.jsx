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
        alignItems: 'center !important',
        columnGap: 15,
        '&:hover':{
            transition: 'all .3s',
            color: theme.palette.primary.main,
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
    linkText: {
       textTransform: 'capitalize',
       color: theme.palette.text.primary,
       textAlign: 'justify',
       marginBottom: '0 !important',
       marginTop: '0 !important',
       fontWeight: '600 !important',
    },
    activeText: {
        color: '#fff !important',
        fontWeight: '800 !important',
    },
    IconButton: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        padding: 7,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        }
    },
    submenuContainer: {
        '& *': {
            marginBottom: '0px'
        },
        padding: '0 20px !important',
    },
    subText: {
        fontSize: '13px !important',
        textTransform: 'capitalize !important'
    },
    subeOpenActive: {
        '& *': {
            color: theme.palette.primary.main
        }
    }
}));

export const RtLSideBarNavigationStyle = makeStyles((theme) => ({
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
        alignItems: 'flex-end !important',
        columnGap: 15,
        '&:hover *':{
            transition: 'all .3s',
            color: theme.palette.primary.main,
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
    linkText: {
       fontSize: '1.08em !important',
       textTransform: 'capitalize',
       color: theme.palette.text.primary,
       textAlign: 'justify',
       marginBottom: '0 !important',
       marginTop: '0 !important',
       fontWeight: '600 !important',
    },
    activeText: {
        color: '#fff !important',
        fontWeight: '800 !important',
    },
    IconButton: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        padding: 7,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        }
    },
    submenuContainer: {
        '& *': {
            marginBottom: '0px'
        },
        padding: '0 20px !important',
    },
    subText: {
        fontSize: '13px !important',
        textTransform: 'capitalize !important'
    },
    subeOpenActive: {
        '& *': {
            color: theme.palette.primary.main
        }
    }
}));
