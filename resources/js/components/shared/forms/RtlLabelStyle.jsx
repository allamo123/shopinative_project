import React from "react";
import { makeStyles } from "@material-ui/core";


export const RtlLabelStyle = makeStyles((theme) => ({
    rootInput : {
       '& .MuiInputLabel-formControl': {
            left: 'unset',
            right: 0
       }
    }
}));