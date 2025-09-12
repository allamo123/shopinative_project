import React, { memo } from "react";
import clsx from 'clsx';
import { Drawer, Box } from '@mui/material';
import { Logo } from "@/components/shared/Logo/Logo";
import { RtlSideBarStyles, SideBarStyles } from "./SideBarStyle";
import { useSelector } from "react-redux";
import { selectedDirection } from "@/store/slices/langSlice";

const SideBar = ({ open, SidebarNavigation, MainSidebarLinks }) => {

    const direction = useSelector(selectedDirection);

    const classes = direction === 'ltr' ? SideBarStyles() : RtlSideBarStyles();
    // const classes = SideBarStyles();

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
            paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            }),
            }}
        >
            <Box className={classes.innerDrawer}>
                <div className={classes.toolbar}>
                    <div className={clsx(classes.logo, {
                        [classes.hide]: !open
                    })}>

                        <Logo logo="logo.png" width={185} />

                    </div>
                    <div className={clsx(classes.icon, {
                        [classes.hide]: open
                    })}>
                        <img src={`${window.origin}/images/icon.png`} width="100%" />
                    </div>
                </div>
                <SidebarNavigation links={MainSidebarLinks} open={open}/>

            </Box>
      </Drawer>
    )
};
export default memo(SideBar);
