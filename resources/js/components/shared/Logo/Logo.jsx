import React, {memo} from "react";
import { makeStyles } from "@material-ui/core";


const useStyle = makeStyles((theme) => ({
    root: {
        '&:hover' : {
            cursor: 'pointer'
        }
    }
}));

export const Logo = memo(({logo, size}) => {

    const classes = useStyle();

    return (
        <img
            className={classes.root}
            src={`${window.location.origin}/images/${logo}`}
            width={size}
        />
    );
});
