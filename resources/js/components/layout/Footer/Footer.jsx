import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core";
import { memo } from "react";
import { selectedDirection } from "../../../store/slices/langSlice";
import { useSelector } from "react-redux";

const useStyle = makeStyles((theme) => ({
    footer: (props) => ({
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        paddingTop:15,
        paddingBottom: 15,
        textAlign: 'center',
        fontSize: '0.8rem',
        zIndex: -1,
        color: '#111111',
        transition: 'all .3s',
        paddingLeft: props.sideBarStatus ? 262 : 53,
        borderTop: '1px solid #ddd'
    }),
    appName: {
        color: theme.palette.primary.main,
        fontWeight: 600,
    }
}));

const RtlStyle = makeStyles((theme) => ({
    footer: (props) => ({
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        paddingTop:15,
        paddingBottom: 15,
        textAlign: 'center',
        fontSize: '0.8rem',
        zIndex: -1,
        color: '#111111',
        transition: 'all .3s',
        paddingRight: props.sideBarStatus ? 262 : 53,
        borderTop: '1px solid #ddd'
    }),
    appName: {
        color: theme.palette.primary.main,
        fontWeight: 600,
    }
}));


const Footer = memo(({ color, sideBarStatus }) => {

    const direction = useSelector(selectedDirection);

    const classes = direction === 'rtl' ? RtlStyle({sideBarStatus}) : useStyle({sideBarStatus});

    return (
        <Box className={classes.footer}>
            <Typography variant="body2" style={{color: color}}>
                © {new Date().getFullYear()} <span className={classes.appName}>Shopinative</span>. All rights reserved.
            </Typography>
        </Box>
    );
});

export default Footer;
