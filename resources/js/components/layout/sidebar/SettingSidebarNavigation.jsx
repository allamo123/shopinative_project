import React, { useCallback, useRef } from "react";
import clsx from "clsx";
import { Typography, Box, MenuList, ListItem, List, ListItemText, ListItemIcon, Divider, IconButton, Button } from "@mui/material";
import { Link } from "@inertiajs/inertia-react";
import { SideBarNavigationStyle, RtLSideBarNavigationStyle } from "./SideBarNavigationStyle";
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from "react-i18next";
// import { useSelector } from "react-redux";
// import { selectedDirection } from "../../../../../../../../resources/js/store/slices/langSlice";

export const SettingSidebarNavigation = ({ menu, id, open }) => {

    // const direction = useSelector(selectedDirection);

    // const classes = direction === 'ltr' ? SideBarNavigationStyle() : RtLSideBarNavigationStyle();
    const classes = SideBarNavigationStyle();

    const scroll = useRef();

    const { t } = useTranslation();

    const checkActiveLink = useCallback((href, param) => {
        const entryRoute = href.split('.')[0];
        return route().current(`${entryRoute}.*`);
    }, []);

    return (
        <MenuList classes={{root: classes.ul}}>
            {menu.map(({label, icon, href, hasParameter, buttonHref}, index) =>
                <Box className={clsx(classes.link, {
                    [classes.active] : checkActiveLink(href)
                })} key={index} sx={{padding: 1}}>
                    <Box sx={{display: 'flex', gridColumnGap: 5}}>
                        {icon}
                        <Typography className={route().current(href) ? classes.activeText : classes.ListItemText}  variant="body2">
                            {t('layouts.'+label)}
                        </Typography>
                    </Box>
                </Box>
            )}
        </MenuList>
    );
};
