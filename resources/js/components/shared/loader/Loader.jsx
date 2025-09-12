import React, {memo} from "react";
import { LoaderStyle } from "./LoaderStyle";
import { BeatLoader } from "react-spinners";

const Loader = ({spinner, children}) => {
    const classes = LoaderStyle();
    return (
        spinner === true &&
        <div className={classes.body}>
            <div className={classes.fallbackSpinner}>
                <div className={classes.loading}>
                    <BeatLoader color="#14a800" speedMultiplier={0.5}/>
                    {children}
                </div>
            </div>
        </div>
    )
};
export default memo(Loader);
