import React, { useEffect, useState } from "react";
import clsx from 'clsx';
import { AppBar, Box, IconButton} from "@material-ui/core";
import { HeaderStyle, RtlHeaderStyle } from "./HeaderStyle";
import { HeaderSearch } from "../../../../../../../resources/js/components/shared/search/HeaderSeaarch/HeaderSearch";
import { HeaderNavigation } from "../../components/Navigations/HeaderNavigation/HeaderNavigation";
import { Link } from "@inertiajs/inertia-react";
import MenuIcon from '@material-ui/icons/Menu';
import { selectedDirection } from "../../../../../../../resources/js/store/slices/langSlice";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { Logo } from "../../../../../../../resources/js/components/shared/Logo/Logo";

export const WelcomeHeader = ({ navlinks, open, setOpen }) => {

    const direction = useSelector(selectedDirection);

    const classes = direction === 'ltr' ? HeaderStyle() : RtlHeaderStyle();

    return (
        <AppBar className={clsx(classes.AppBar, {
            [classes.LightBackground] :  !navlinks
            })}
            position="static"
        >
            <div className={classes.welcome}>
                <Box>
                    <Logo logo="logo.svg" size={165} />
                </Box>
                <HeaderNavigation navlinks={navlinks ? navlinks : null}  />
            </div>
        </AppBar>
    );
}
