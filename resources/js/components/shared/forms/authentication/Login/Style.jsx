import { makeStyles } from "@material-ui/core";

export const Style = makeStyles((theme) => ({

    continueBtn: {
        marginTop: theme.spacing(3)
    },
    socialHolder: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    facebookBtn: {
        width: '49%',
        backgroundColor: '#e8f0fe42',
        paddingTop: 10,
        paddingBottom: 10,
    },
    googleBtn: {
        // marginBottom: theme.spacing(2)
        width: '49%',
        backgroundColor: '#e8f0fe42',
    },
    dividersHolder: {
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
        margin: theme.spacing(1, 0)
    },
    divider: {
        flexGrow: 1,
    },
    bottomHolderLinks: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: theme.spacing(2, 0, 0)
    },
    link: {
        textTransform: 'capitalize',
        color: theme.palette.primary.dark,
    }

}));
;