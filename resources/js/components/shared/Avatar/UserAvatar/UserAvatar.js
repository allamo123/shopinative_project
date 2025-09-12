import React, { memo, useEffect, useState } from "react";
import {Avatar} from "@material-ui/core";
import { AuthAvatarStyle } from "../AuthAvatar/AuthAvatarStyle";
import { StyledBadge } from "../AuthAvatar/AuthAvatar";

export const UserAvatar = ({ type, media }) => {

    const classes = AuthAvatarStyle();

    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        if (type === 'user') {
            console.log('fuckin media', media)
            media.filter(media => media.collection_name == 'avatar' &&
                setAvatar(`/media/${media.id}/conversions/${media.name}-thumb.jpg`)
            )
        }
        else {
            console.log('ehhhhhhhhh ba2a', media);
            media.filter(media => media.collection_name == 'company-logo' &&
                setAvatar(`/media/${media.id}/conversions/${media.name}-small.jpg`)
            )
        }
    }, []);

    useEffect(() => {
        console.log('avatar', avatar);
    }, [avatar])

    return (
        <StyledBadge
            overlap="circular"
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            variant="dot"
        >
            <Avatar className={classes.small} src={avatar}  />

      </StyledBadge>
    );
};
