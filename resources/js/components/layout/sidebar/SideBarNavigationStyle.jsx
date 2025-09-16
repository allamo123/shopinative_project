import { makeStyles } from "@material-ui/core";

const baseStyles = (theme) => ({
    ul: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        padding: "15px 10px !important",
    },
    shrinkSideUl: {
        padding: '0 !important',
    },
    groupTitle: {
        textTransform: "capitalize",
    },
    link: {
        borderRadius: 21,
        marginTop: 8,
        transition: "all .2s",
        cursor: "pointer",
        alignItems: "center !important",
        columnGap: 15,
        [`&:hover:not($active)`]: {
            transition: "all .3s",
            backgroundColor: "#f5f5f5",
            "& *": {
                color: theme.palette.primary.main,
            },
        },
    },
    active: {
        backgroundColor: theme.palette.primary.light,
        color: "#fff",
        cursor: "auto",
        "& .MuiSvgIcon-root": {
            color: "#fff",
        },
        "&:hover": {
            "& .MuiTypography-root": {
                color: "#fff",
            },
        },
    },
    activeIcon: {
        color: `#fff !important`,
    },
    ItemIcon: {
        minWidth: "0 !important",
    },
    shrinkSide: {
        padding: "10px !important",
        textAlign: "center",
        borderRadius: '0 !important',
        marginTop: '0 !important'
    },
    flySubMenu: {
        position: 'fixed !important',
        left: 52,
        width: 200,
        backgroundColor: '#f5f5f5 !important',
        padding: '15px 0',
        border: '1px solid #ddd',
        borderRadius: '0 12px 12px 0',
    },
    linkText: {
        fontSize: "1.08em !important",
        textTransform: "capitalize",
        color: theme.palette.text.primary,
        textAlign: "justify",
        marginBottom: "0 !important",
        marginTop: "0 !important",
        fontWeight: "600 !important",
    },
    activeText: {
        color: "#fff !important",
        fontWeight: "800 !important",
    },
    IconButton: {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        padding: 7,
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
        },
    },
    submenuContainer: {
        padding: "0 20px !important",
        "& *": {
            marginBottom: "0px",
            paddingBottom: "2px !important",
            paddingTop: "0px !important",
        },
    },
    subText: {
        fontSize: "13px !important",
        textTransform: "capitalize !important",
        fontWeight: "600 !important",
    },
    submenuOpen: {
        "& *": {
            color: theme.palette.primary.main,
        },
    },
});

export const SideBarNavigationStyle = makeStyles((theme) => ({
    ...baseStyles(theme),
    scroll: {
        maxHeight: '100vh',
        height: '90%',
    },
    flySubMenu: {
        position: 'fixed !important',
        left: 53,
        width: 200,
        backgroundColor: '#f5f5f5 !important',
        padding: '15px 0',
        border: '1px solid #ddd',
        borderRadius: '0 8px 8px 0',
        boxShadow: theme.shadows[1],
    },
}));

export const RtLSideBarNavigationStyle = makeStyles((theme) => ({
    ...baseStyles(theme),
    scroll: {
        maxHeight: '100vh',
        height: '90%',
        '& .simplebar-track': {
            left: '0 !important',
            right: 'unset !important'
        }
    },
    linkText: {
        fontSize: "1em !important",
        textTransform: "capitalize",
        color: theme.palette.text.primary,
        textAlign: "justify",
        marginBottom: "0 !important",
        marginTop: "0 !important",
        fontWeight: "600 !important",
    },
    subText: {
        fontSize: "14px !important",
        fontWeight: "600 !important",
        textTransform: "capitalize !important",
    },
    flySubMenu: {
        position: 'fixed !important',
        right: 53,
        width: 200,
        backgroundColor: '#f5f5f5 !important',
        padding: '15px 0',
        border: '1px solid #ddd',
        borderRadius: '8px 0 0 8px',
        boxShadow: theme.shadows[1]
    },
}));
