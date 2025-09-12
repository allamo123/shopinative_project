import React, { memo } from "react";
import { Avatar } from "@material-ui/core";
import { ProfileAvatarStyle } from "./ProfileAvatarStyle";

export const ProfileAvatar = memo(({ src, width, height }) => {
    const classes = ProfileAvatarStyle();

    return (
        <Avatar
         classes={{root: classes.root}}
         width={width ? width : 60}
         height={height ? height : 60}
         src={src}
        />
    );
});
