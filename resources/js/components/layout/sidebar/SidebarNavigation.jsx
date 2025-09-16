import React, { Fragment, useCallback, useRef, useState } from "react";
import clsx from "clsx";
import {
    Typography,
    Box,
    MenuList,
    ListItem,
    List,
    ListItemText,
    ListItemIcon,
    Divider,
    IconButton,
    Button,
    Collapse
} from "@mui/material";
import { Link } from "@inertiajs/inertia-react";
import {
    SideBarNavigationStyle,
    RtLSideBarNavigationStyle
} from "./SideBarNavigationStyle";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import "react-perfect-scrollbar/dist/css/styles.css";
import SimpleBar from "simplebar-react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectedDirection } from "../../../store/slices/langSlice";
import "simplebar-react/dist/simplebar.min.css";

export const SidebarNavigation = ({ links, id, open }) => {

    const direction = useSelector(selectedDirection);

    const classes = direction === "rtl"
        ? RtLSideBarNavigationStyle()
        : SideBarNavigationStyle();

    const scroll = useRef();

    const { t } = useTranslation();

    const [openSub, setOpenSub] = useState(null); // accordion state

    const checkActiveLink = useCallback((href) => {
        if (!href) return false;
        const entryRoute = href.split(".")[0];
        return route().current(`${entryRoute}.*`);
    }, []);

    const toggleSubmenu = (label) => {
        setOpenSub((prev) => (prev === label ? null : label));
    };

    const renderTitle = (title) => (
        <Box padding={1} paddingBottom={0} paddingTop={0}>
            {open ? (
                <Typography variant="overline" color="textSecondary">
                    {t("layouts.sidebar." + title)}
                </Typography>
            ) : (
                <Divider />
            )}
        </Box>
    );

    const renderMenuItem = ({ label, icon, href, hasParameter, sub }) => {

        const isActive = checkActiveLink(href);
        const isOpen = openSub === label;

        const handleClick = (e) => {
            if (isActive) e.preventDefault();
            if (sub) toggleSubmenu(label);
        };

        return (
            <Box sx={sub && isOpen ? { background: '#f5f5f5' } : {}}>
                <List component="li" disablePadding>
                    <ListItem
                        className={clsx(classes.link, {
                            [classes.active]: isActive,
                            [classes.shrinkSide]: !open,
                            [classes.submenuOpen]: sub && isOpen,
                        })}
                        href={href && !sub ? (hasParameter ? route(href, id) : route(href)) : undefined}
                        component={href && !sub ? Link : "div"}
                        onClick={handleClick}
                    >
                        {icon && (
                            <ListItemIcon
                                className={clsx(classes.ItemIcon, {
                                    [classes.activeIcon]: isActive
                                })}
                            >
                                {icon}
                            </ListItemIcon>
                        )}

                        {open && (
                            <ListItemText
                                className={clsx(classes.subMenuRoot, {
                                    [classes.activeText]: isActive,
                                })}
                                primary={t("layouts.sidebar." + label)}
                                primaryTypographyProps={{
                                    variant: "subtitle2",
                                    classes: {
                                        subtitle2: isActive
                                            ? classes.activeText
                                            : classes.linkText
                                    }
                                }}
                            />
                        )}

                        {sub && open && (isOpen ? <ExpandLess /> : <ExpandMore />)}
                    </ListItem>
                </List>

                {sub && (
                    <Collapse
                        in={isOpen}
                        className={open ? '' : classes.flySubMenu}
                        timeout="auto"
                        orientation={open ? 'vertical' : 'horizontal'}
                        unmountOnExit
                        sx={{ background: '#f5f5f5' }}
                    >
                        <List
                            className={classes.submenuContainer}
                            component="div"
                            disablePadding
                            sx={!open ? {width: 200, padding: '0 8px !important'} : {}}
                        >
                            {sub.map((child, i) => (
                                <ListItem
                                    className={clsx(classes.link, classes.subItem, {
                                        [classes.active]: checkActiveLink(child.href)
                                    })}
                                    href={
                                        child.href
                                            ? child.hasParameter
                                                ? route(child.href, id)
                                                : route(child.href)
                                            : undefined
                                    }
                                    component={child.href ? Link : "div"}
                                    onClick={(e) => {
                                        if (checkActiveLink(child.href)) e.preventDefault();
                                    }}
                                    key={i}
                                >
                                    {child.icon && (
                                        <ListItemIcon
                                            className={clsx(classes.ItemIcon, {
                                                [classes.activeIcon]: isActive
                                            })}
                                            style={direction === 'rtl' ? {transform: 'rotateY(180deg)'} : {}}
                                        >
                                            {child.icon}
                                        </ListItemIcon>
                                    )}

                                        <ListItemText
                                            primary={t("layouts.sidebar." + child.label)}
                                            primaryTypographyProps={{
                                                variant: "body2",
                                                classes: {
                                                    body2: checkActiveLink(child.href)
                                                        ? classes.activeText
                                                        : classes.subText
                                                }
                                            }}
                                        />

                                </ListItem>
                            ))}
                        </List>
                    </Collapse>
                )}
            </Box>
        );
    };

    return (
        <SimpleBar ref={scroll} className={classes.scroll} datadata-simplebar-direction={direction}>
            {links.map(({ title, menu }, index) => (
                <Box key={index} sx={{ maxWidth: "100%", height: "100%" }}>
                    <MenuList classes={{ root: open ? classes.ul : classes.shrinkSideUl }} disablePadding>
                        {menu.map(
                            ({ title, label, icon, href, hasParameter, buttonHref, sub }, i) => {
                                const isLast = i === menu.length - 1;

                                return (
                                    <Box
                                        key={i}
                                        sx={
                                            isLast
                                                ? {
                                                    flexGrow: 1,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "start",
                                                }
                                                : {}
                                        }
                                    >
                                        {title && renderTitle(title)}
                                        {!title && !buttonHref &&
                                            renderMenuItem({ label, icon, href, hasParameter, sub })}
                                    </Box>
                                );
                            }
                        )}
                    </MenuList>
                </Box>
            ))}
        </SimpleBar>
    )
};
