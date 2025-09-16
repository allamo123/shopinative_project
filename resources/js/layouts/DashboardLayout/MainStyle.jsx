import { makeStyles } from "@material-ui/core";

export const MainStyle = makeStyles((theme) => ({
    pageTitleHeader: {
        justifyContent: 'space-between',
        alignItems:'center',
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
        width: '100%',
        marginLeft: 'auto',
        transition: '.2s',
        paddingTop: 42,
        paddingLeft: 262,
    },
    middleContent: {
        padding: '8px 52px 60px',
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
        width: '100%',
        marginLeft: 'auto',
        transition: '.2s',
        paddingRight:262,
        paddingTop: 42
    },
    middleContent: {
        padding: '8px 52px 60px',
    },
    maxWidth: {
        paddingRight:50
    },
    noSideBarContent: {
        paddingRight: 0,
    }
}));
