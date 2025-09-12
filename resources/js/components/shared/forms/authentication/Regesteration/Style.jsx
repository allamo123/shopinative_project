import { makeStyles } from "@material-ui/core";

export const Style = makeStyles((theme) => ({

    root: {
        padding: theme.spacing(1, 2) ,
        border: '1px solid #ddd',
    },
    card: {
        padding: theme.spacing(2, 4),
    },
    socialHolder: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    facebookBtn: {
        width: '49%',
        backgroundColor: '#f8f8f8',
        paddingTop: 10,
        paddingBottom: 10,
    },
    googleBtn: {
        width: '49%',
        backgroundColor: '#f8f8f8',
        paddingTop: 10,
        paddingBottom: 10,
    },
    dividersHolder: {
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
    divider: {
        flexGrow: 1,
    },
    link: {
        textTransform: 'capitalize',
        color: '#121212',
        fontSize: 14,
        letterSpacing: .2,
        fontWeight: 600,
    }

}));
