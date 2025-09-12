import { makeStyles } from "@material-ui/core";

export const HeaderStyle = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        marginLeft: 'auto',
        paddingLeft: 220,
        transition: 'all .5s',
    },
    welcome: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        width: '100%',
        marginLeft: 'auto',
        paddingLeft: 15,
        transition: 'all .5s',
    },
    AppBar: {
        backgroundColor: '#fff !important',
        height: 62,
        justifyContent: 'center',
    },
    brand: {
        width: 185,
    },
    LightBackground: {
        backgroundColor: '#fff'
    },
    maxWidth: {
        paddingLeft: 50,
        transition: 'all .5s',
    },
}));

export const RtlHeaderStyle = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        marginLeft: 'auto',
        paddingRight: 220,
        transition: 'all .5s',
    },
    welcome: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        width: '100%',
        marginLeft: 'auto',
        paddingRight: 15,
        transition: 'all .5s',
    },
    AppBar: {
        backgroundColor: '#fff !important',
        height: 62,
        justifyContent: 'center',
    },
    brand: {
        width: 185,
    },
    LightBackground: {
        backgroundColor: '#fff'
    },
    maxWidth: {
        paddingRight: 50,
        transition: 'all .5s',
    },
}));
