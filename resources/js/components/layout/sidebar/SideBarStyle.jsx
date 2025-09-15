import { makeStyles } from "@material-ui/core";

const drawerWidth = 262;

export const SideBarStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: 0,
  },
  logo: {
    flexGrow: 1,
    alignSelf: 'center',
    justifySelf: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  icon : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    height: '100vh',
    position: 'fixed',
    top: 0,
    zIndex: 9999,
    boxShadow: '2px 1px 5px rgb(100 116 139 / 12%)',
  },
  innerDrawer : {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflowX: 'hidden'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 52,
    [theme.breakpoints.up('sm')]: {
      width: 52,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3, 1.2),
    color: '#FFFFFF',
    boxShadow: '0px 1px 5px rgb(100 116 139 / 12%)',
    minHeight: 62,
    borderBottom: '1px solid #ddddddcf'
  },
}));

export const RtlSideBarStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: 0,
  },
  logo: {
    flexGrow: 1,
    alignSelf: 'center',
    justifySelf: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  icon : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    height: '100vh',
    position: 'fixed',
    top: 0,
    zIndex: 9999,
    boxShadow: '-2px 1px 5px rgb(100 116 139 / 12%)',
  },
  innerDrawer : {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflowX: 'hidden',
  },
  drawerOpen: {
    width: drawerWidth,
    right: 0,
    left: 'auto',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    right: 0,
    left: 'auto',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 52,
    [theme.breakpoints.up('sm')]: {
      width: 52,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    boxShadow: '0px 1px 5px rgb(100 116 139 / 12%)',
    minHeight: 62,
    padding: theme.spacing(4, 1.2),
    borderBottom: '1px solid #ddddddcf',
  },
}));
