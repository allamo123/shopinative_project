import { makeStyles } from "@material-ui/core";

export const HomeStyle = makeStyles((theme) => ({
    PageWelcome: {
        textTransform: 'capitalize',
        fontWeight: 600
    },
    userName: {
        fontWeight: 800,
        color: theme.palette.primary.main,
    },
    cardHeaderRoot: {
        borderBottom: '1px solid #ddd',
        padding: '24px 32px',
    },
    cardHeaderTitle: {
        textTransform: 'capitalize',
        fontWeight: 500
    },
    cardHeaderSubheader: {
        textTransform: 'capitalize',
        fontWeight: 500,
        fontSize: 14,
    },
    cardContent: {
        height: '100%',
        padding: '24px 32px',
        transition: 'all .1s',
    },
    cardContentClosed: {
        height: 0,
        padding: '0 !important',
        transition: 'all .1s',
    },
    nestedContentOpen: {
        height: '100%',
        padding: 15,
        transition: 'all .1s',
    },
    nestedContentClosed: {
        height: 0,
        overflow: 'hidden',
        transition: 'all .1s',
    },
}));
