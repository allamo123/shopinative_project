import { makeStyles } from "@material-ui/core";

export const LoaderStyle = makeStyles((theme) => ({
    body: {
        position: 'absolute',
        top:18,
        left:0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        zIndex: 999
    },
    fallbackSpinner: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
    },
    loading: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100%',
        border: '3px solid transparent'
      }
}));
