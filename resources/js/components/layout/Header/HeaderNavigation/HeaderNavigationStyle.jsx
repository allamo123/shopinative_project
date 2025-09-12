import { makeStyles } from "@material-ui/core";

export const HeaderNavigationStyle = makeStyles((theme) => ({
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Menu: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow:1
    },
    right: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    MenuItem :{
        padding: theme.spacing(0, 1)
    },
    MenuLabel: {
        textTransform: 'capitalize !important'
    },
    justifyEnd: {
        justifyContent: 'end'
    },
    AutoWidth: {
        width: 'auto'
    },
}));
