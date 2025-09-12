import { makeStyles } from "@material-ui/core";

export const MainStyle = makeStyles((theme) => ({
    pageTitleHeader: {
        justifyContent: 'space-between',
        alignItems:'center',
        padding: theme.spacing(0, 1),
    },
    pageTitle :{
        display: 'flex',
        alignItems: 'center'
    },
    dynamicPageTitle: {
        paddingLeft: 213,
        transition: '.2s'
    },
    titlePadding: {
        paddingLeft: 52,
        transition: '.2s',
        // [theme.breakpoints.up('md')]: {
        //     paddingLeft: '4%',
        // },
    },
    buttonTextColor: {
        color: '#fff'
    },
    buttonLabel: {
        textTransform: 'capitalize'
    },
    buttonTextType: {
        borderRadius: 0,
    },
    activeBtnLink: {
        borderBottom: '3px solid #14a800'
    },
    Capitalize: {
        textTransform: 'capitalize',
        color: '#fff'
    },
    content: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        width: '100%',
        marginLeft: 'auto',
        transition: '.2s',
        paddingLeft: 213,
    },
    middleContent: {
        // paddingTop: theme.spacing(2),
        // paddingBottom: theme.spacing(2),
    },
    maxWidth: {
        paddingLeft: 50,
    },
    noSideBarContent: {
        paddingLeft: 0,
    },
    footer: {
        paddingTop:15,
        paddingBottom: 15,
        textAlign: 'center',
        color: '#f7fbfc',
        fontSize: '0.8rem',
        zIndex: 2,
    },
}));

export const RtlMainStyle = makeStyles((theme) => ({
    // root: {
    //   display: 'flex',
    // },
    pageTitleHeader: {
        justifyContent: 'space-between',
        alignItems:'center',
        // padding: theme.spacing(0, 1, 3),
    },
    pageTitle :{
        display: 'flex',
        alignItems: 'center'
    },
    dynamicPageTitle: {
        paddingRight: '15%',
        transition: '.2s'
    },
    titlePadding: {
        paddingRight: 0,
        transition: '.2s',
        [theme.breakpoints.up('md')]: {
            paddingRight: '4%',
        },
    },
    buttonTextColor: {
        color: '#fff'
    },
    buttonLabel: {
        textTransform: 'capitalize'
    },
    buttonTextType: {
        borderRadius: 0,
    },
    activeBtnLink: {
        borderBottom: '3px solid #14a800'
    },
    Capitalize: {
        textTransform: 'capitalize',
        color: '#fff'
    },
    content: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        width: '100%',
        marginLeft: 'auto',
        transition: '.2s',
        paddingRight:200
    },
    middleContent: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    maxWidth: {
        paddingRight:50
    },
    noSideBarContent: {
        paddingRight: 0,
    }
}));
