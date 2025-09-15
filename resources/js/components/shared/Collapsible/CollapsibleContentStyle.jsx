import { makeStyles } from "@material-ui/core";

export const CollapsibleContentStyle = makeStyles((theme) => ({
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
