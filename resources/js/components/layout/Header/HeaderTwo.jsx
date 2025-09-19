import React, { Fragment, useEffect, useState } from "react";
import clsx from 'clsx';
import { AppBar, Box, IconButton} from "@mui/material";
import { HeaderStyle, RtlHeaderStyle } from "./HeaderStyle";
import MenuIcon from '@material-ui/icons/Menu';
import { selectedDirection } from "@/store/slices/langSlice";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { HeaderNavigation } from "./HeaderNavigation/HeaderNavigation";
import { Logo } from "../../../components/shared/Logo/Logo";


export const HeaderTwo = ({ isTransparent }) => {

    const { t } = useTranslation();

    const direction = useSelector(selectedDirection);

    const classes = direction === 'ltr' ? HeaderStyle() : RtlHeaderStyle();

    return (
        <AppBar elevation={4} position="fixed" color="inherit" style={{padding: '8px 52px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box>
                <Logo logo="logo.svg" size={180} />
            </Box>
            <HeaderNavigation navlinks={[]}  />
        </AppBar>
    );
}
