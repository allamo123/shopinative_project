import { makeStyles } from "@material-ui/core";

export const HomeStyle = makeStyles((theme) => ({
    PageWelcome: {
        textTransform: 'capitalize',
        fontWeight: 600
    },
    userName: {
        fontWeight: 800,
        color: theme.palette.primary.main,
    }
}));
