import { makeStyles } from "@material-ui/core";


const baseStyles = (theme) => ({

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
    middleContent: {
        padding: '8px 52px 60px',
    },
    footer: {
        paddingTop:15,
        paddingBottom: 15,
        textAlign: 'center',
        color: '#f7fbfc',
        fontSize: '0.8rem',
    },
});

export const MainStyle = makeStyles((theme) => ({

    ...baseStyles(theme),

    titlePadding: {
        paddingLeft: 52,
        transition: '.2s',
    },
    content: {
        width: '100%',
        marginLeft: 'auto',
        transition: '.2s',
        paddingTop: 62,
        paddingLeft: 262,
    },
    maxWidth: {
        paddingLeft: 50,
    },
    noSideBarContent: {
        paddingLeft: 0,
    },
}));

export const RtlMainStyle = makeStyles((theme) => ({

    ...baseStyles(theme),

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
    content: {
        width: '100%',
        marginLeft: 'auto',
        transition: '.2s',
        paddingRight:262,
        paddingTop: 62
    },
    maxWidth: {
        paddingRight:50
    },
    noSideBarContent: {
        paddingRight: 0,
    }
}));
