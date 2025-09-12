import { makeStyles } from "@material-ui/core";

export const RegisterationStyle = makeStyles((theme) => ({
    card: {
        textAlign:'center',
        padding: theme.spacing(4, 0),
        border: '1px solid #ddd',
        [theme.breakpoints.down('md')]: {
            border: 0,
            boxShadow: 'none'
        },
    },
    container: {
        justifyContent: 'center',
    },
    selectBox: {
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(4, 0),
        },
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(1, 0),
        },
        padding: theme.spacing(5, 1),
        border: '1px solid #ddd',
        '&:hover' : {
            cursor: 'pointer',
            backgroundColor: '#f5f5f5',
            borderColor: theme.palette.success.light,
        },
    },
    BoxSelected: {
        backgroundColor: '#f5f5f5',
        borderColor: theme.palette.success.light,
    },
    radio: {
        position: 'absolute',
        top: 5,
        right: 5,
    }
}));
