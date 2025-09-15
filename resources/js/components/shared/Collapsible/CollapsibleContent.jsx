import React, { useState } from "react";
import { CollapsibleContentStyle } from "./CollapsibleContentStyle";
import { Box, IconButton, Typography } from "@material-ui/core";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const CollapsibleContent = ({ children, title, isNestedOpen, setIsNestedOpen, type }) => {

    const classes = CollapsibleContentStyle();

    const handleOpenNestedCard = () => {
        setIsNestedOpen(isNestedOpen === type ? null : type);
    }

    return (
        <Box padding={1} borderRadius={15} sx={{backgroundColor: '#f5f5f5c2'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gridColumnGap: 5}}>
                    <RadioButtonUncheckedIcon />
                    <Typography>{title}</Typography>
                </Box>
                <IconButton  onClick={() => handleOpenNestedCard()}>
                    {isNestedOpen ?  <KeyboardArrowUpIcon /> : <ChevronRightIcon />}
                </IconButton>
            </Box>
            <Box className={isNestedOpen === type ? classes.nestedContentOpen : classes.nestedContentClosed}>
                {children}
            </Box>
        </Box>
    );
}

export default CollapsibleContent
