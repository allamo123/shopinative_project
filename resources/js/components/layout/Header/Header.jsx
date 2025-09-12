import React, { Fragment, useEffect, useState } from "react";
import clsx from 'clsx';
import { AppBar, Box, IconButton} from "@mui/material";
import { HeaderStyle, RtlHeaderStyle } from "./HeaderStyle";
// import HomeIcon from '@mui/icons-material/Home';

// import { HeaderSearch } from "../../../../../../../resources/js/components/shared/search/HeaderSeaarch/HeaderSearch";
// import FindInPageIcon from '@mui/icons-material/FindInPage';
// import { HeaderNavigation } from "./HeaderNavigation/HeaderNavigation";
import MenuIcon from '@material-ui/icons/Menu';
import { selectedDirection } from "@/store/slices/langSlice";
import { useSelector } from "react-redux";
import { Inertia } from "@inertiajs/inertia";
import { useTranslation } from "react-i18next";
import { HeaderNavigation } from "./HeaderNavigation/HeaderNavigation";


export const Header = ({ open, setOpen }) => {

    // const MenuIco = MenuIcon.default;
    // console.log();

    const { t } = useTranslation();

    const direction = useSelector(selectedDirection);

    const classes = direction === 'ltr' ? HeaderStyle() : RtlHeaderStyle();
    // const classes = HeaderStyle();

    return (
        <AppBar className={classes.AppBar}
            position="static"
        >
            <div className={clsx(classes.root, {
                [classes.maxWidth]: !open
            })}>
                <Box sx={{display: 'flex', alignItems: 'center', flexGrow:1}}>
                    <IconButton  onClick={() => setOpen(!open)}>
                        <MenuIcon fontSize="medium" />
                    </IconButton>
                </Box>

                <HeaderNavigation navlinks={[]}  />
            </div>
        </AppBar>
    );
}
