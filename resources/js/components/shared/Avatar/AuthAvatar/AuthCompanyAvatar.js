import React, { memo } from "react";
import {Avatar, withStyles, Badge} from "@material-ui/core";
import { AuthAvatarStyle } from "./AuthAvatarStyle";
import { usePage } from "@inertiajs/inertia-react";


export const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);

export const AuthCompanyAvatar = memo(() => {

    const { auth } = usePage().props;

    console.log('com',auth.company.avatar);

    const classes = AuthAvatarStyle();

    return (
        <StyledBadge
            overlap="circular"
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
            variant="dot"
        >
            <Avatar className={classes.small} src={auth.company.avatar}  />

      </StyledBadge>
    );
});
