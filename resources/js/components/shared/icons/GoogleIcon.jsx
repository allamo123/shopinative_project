import React, {memo} from "react";

export const GoogleIcon = memo(({ size }) => {
    return <img src={`${window.location.origin}/images/icons/google.png`} width={size ? size : 15} style={{marginRight:10, marginLeft:10}}/>
});
