import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core";
import { memo } from "react";

const useStyle = makeStyles((theme) => ({
    footer: (props) => ({
        position: props.color === '#fff' ? 'absolute' : 'unset',
        bottom: 0,
        left: 0,
        width: '100%',
        paddingTop:15,
        paddingBottom: 15,
        textAlign: 'center',
        fontSize: '0.8rem',
        color: '#111111',
        transition: 'all .3s',
        zIndex: 2
    }),
    appName: {
        color: theme.palette.primary.main,
        fontWeight: 600,
    }
}));


const Footer = memo(({ color, sideBarStatus }) => {

    const classes = useStyle({sideBarStatus, color});

    return (
        <Box className={classes.footer}>
            <Typography variant="body2" style={{color: color}}>
                © {new Date().getFullYear()} <span className={classes.appName}>Shopinative</span>. All rights reserved.
            </Typography>
        </Box>
    );
});

export default Footer;
