import React from "react"
import { Box, Typography, makeStyles } from "@material-ui/core";


const useStyle = makeStyles((theme) => ({
    fixedFooter: {
        position: 'absolute',
        bottom: 15,
        width: '100%',
        textAlign: 'center',
        color: '#f7fbfc',
        fontSize: '0.8rem',
        zIndex: 2,
        [theme.breakpoints.down('md')]: {
          color: '#111111',
        }
    },
    footer: {
        paddingTop:15,
        paddingBottom: 15,
        textAlign: 'center',
        color: '#f7fbfc',
        fontSize: '0.8rem',
        zIndex: 2,
        color: '#111111',
    },
}));

const Footer = ({ isFixed }) => {

    const classes = useStyle();

    return (
        <Box className={isFixed ? classes.fixedFooter : classes.footer}>
            <Typography variant="body2">
                © {new Date().getFullYear()} Shopinative. All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;
