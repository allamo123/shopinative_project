import React, {useState, useRef, useEffect, memo} from "react";
import {
    MenuList,
    Paper,
    Popper,
    Tooltip,
    Button,
    ClickAwayListener,
    Grow,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemAvatar,
    Box,
    Typography,
} from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import { AuthAvatar } from "@/components/shared/Avatar/AuthAvatar/AuthAvatar";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { UserDropdownStyle } from "./UserDropdownStyle";

export const UserDropdown = memo(({ links }) => {

    const classes = UserDropdownStyle();

    const {auth: { user }} = usePage().props;

    const [dropdown, setDropdown] = useState(false);

    const anchorRef = useRef(null);

    const handleToggle = () => {
        setDropdown((prev) => !prev);
    };

    const handleClose = (e) => {
        if (anchorRef.current && anchorRef.current.contains(e.target)) {
            return;
        }
        setDropdown(false)
    };

    const handleListKeyDown = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            setDropdown(false);
        }
    };

    const prevOpen = useRef(open);

    useEffect(() => {
        if (prevOpen.current === true && dropdown === false) {
            anchorRef.current.focus();
          }

          prevOpen.current = open;
    },[dropdown]);

    const HandleLogOut = () => {
        Inertia.post(route('logout'));
    }

    return (
        <>
            <Tooltip arrow title="User Settings">
                <Button
                    color="primary"
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    >
                       <Box sx={{display: 'flex', gridGap: 10, alignItems: 'center'}}>
                            <Box>
                                <AuthAvatar />
                            </Box>
                            <Box className={classes.userName} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant="caption" color="textPrimary">{`${user.first_name} ${user.last_name}`}</Typography>
                            </Box>
                        </Box>
                </Button>
            </Tooltip>
            <Popper
              open={dropdown}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              placement="bottom-end"
              disablePortal={false}
              style={{zIndex: 9999}}
            >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin: placement === 'bottom' ? 'right top' : 'right bottom',
                        minWidth:250,
                        border: '1px solid #ddd'
                    }}
                    elevation={2}
                >
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={dropdown} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                <List component="div" disablePadding>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <AuthAvatar />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={`${user.first_name} ${user.last_name}`}
                                            secondary={user.email}
                                        >
                                        </ListItemText>
                                    </ListItem>
                                    <Divider />
                                    <ListItem button onClick={() => HandleLogOut()}>
                                        <ListItemIcon>
                                            <ExitToAppIcon sizes="small" color="disabled" />
                                        </ListItemIcon>
                                        <ListItemText primary="Logout" />
                                    </ListItem>
                                </List>
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
            </Popper>
        </>
    );
});
