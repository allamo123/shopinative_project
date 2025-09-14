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

export const SidebarNavigation = ({ links, id, open }) => {

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
        links.map(({title, menu},index) =>
            <Box key={index} sx={{maxWidth: '100%', height: '100%'}}>
                    <MenuList classes={{root: classes.ul}} disablePadding>
                            {menu.map(({title, label, icon, href, hasParameter, buttonHref}, index) =>
                                <Box key={index} sx={index === menu.length-1 ? {flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'start'} : {}}>
                                    {title ?
                                        <Box padding={1} paddingBottom={0} paddingTop={0}>
                                            {open ?
                                                <Typography variant="overline" color="textSecondary">
                                                    {t('layouts.'+title)}
                                                </Typography>
                                                :
                                                <Divider />
                                            }
                                        </Box>
                                        :
                                        buttonHref ?
                                        <Box padding={1} paddingTop={1} paddingBottom={0}>
                                            {open ?
                                                <Button startIcon={<HeadsetMicIcon />} size="small" fullWidth variant="contained" color="secondary">
                                                    {t('layouts.support')}
                                                </Button>
                                                :
                                                <IconButton classes={{root: classes.IconButton}}>
                                                    <HeadsetMicIcon fontSize="small" />
                                                </IconButton>
                                            }
                                        </Box>
                                        :
                                        <List component="li" disablePadding>
                                            <ListItem className={clsx(classes.link, {
                                                [classes.active] : checkActiveLink(href)
                                            })}
                                            href={hasParameter ? route(href, id) : route(href)} component={Link}
                                            onClick={(e) => {
                                                if (checkActiveLink(href)) {
                                                    e.preventDefault();
                                                }
                                            }}
                                            >
                                                {icon &&
                                                    <ListItemIcon className={clsx(classes.ItemIcon, {
                                                        [classes.activeIcon] : checkActiveLink(href),
                                                        [classes.openIcon] : open,
                                                    })}>
                                                        {icon}
                                                    </ListItemIcon>
                                                }
                                                <ListItemText className={clsx(classes.ListItemText, {
                                                    [classes.activeText] :  checkActiveLink(href),
                                                })}
                                                primary={t('layouts.'+label)}
                                                primaryTypographyProps={checkActiveLink(href) ? {variant: 'subtitle2'} : {variant: 'body2'}}
                                                />
                                            </ListItem>
                                        </List>
                                    }
                                </Box>
                            )}
                    </MenuList>

            </Box>
        )
    );
};
