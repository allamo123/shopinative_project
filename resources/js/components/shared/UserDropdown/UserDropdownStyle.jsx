import {makeStyles} from "@material-ui/core"

export const UserDropdownStyle = makeStyles((theme)=> ({
    userName: {
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
        [theme.breakpoints.down('md')]: {
           display: 'none',
        },
    },
}));
