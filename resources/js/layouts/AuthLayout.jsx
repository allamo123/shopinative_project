import React, { useEffect, useLayoutEffect } from "react";
import { ThemeProvider, CssBaseline, makeStyles, Box, Grid, Card, CardContent, AppBar, Typography} from "@material-ui/core";
import { theme } from "@/theme";
import { FlashMsg } from "../components/shared/Alerts/FlashMsg/FlashMsg";
import LanguageSwitch from "../components/shared/LangSwitch/LanguageSwitch";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { useDispatch, useSelector } from "react-redux";
import { selectedDirection, setLangDirection } from "@/store/slices/langSlice";
import { CacheProvider } from "@emotion/react";
import { Logo } from "../components/shared/Logo/Logo"
import { Link, usePage } from "@inertiajs/inertia-react";
import { UserDropdown } from "../components/shared/UserDropdown/UserDropdown";
import Footer from "../components/layout/Footer/Footer";



const AuthLayoutStyle = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('md')]: {
            padding: 15,
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: "url('/images/d@2x.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',

        },
        [theme.breakpoints.down('md')]: {
            backgroundColor: '#ffff'
        },
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 500,
    },
    card: {
        zIndex:1,
        [theme.breakpoints.up('md')]: {
            width: '35%',
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
        }
    },
    CardContent: {
        padding: 30
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100%',
        background: `linear-gradient(
            rgba(0, 0, 0, 0.99),
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0.85),
            rgba(0, 0, 0, 0.95),
            rgba(0, 0, 0, 0.99)
        )`,
    }
}));

const AuthLayout = ({ children }) => {

    const { auth: { user } } = usePage().props;

    const classes = AuthLayoutStyle();

    const { flashMsg } = usePage().props;

    const direction = useSelector(selectedDirection);

    const dispatch = useDispatch();

    const cacheLtr = createCache({
        key: "muiltr"
    });

    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, stylisRTLPlugin]
    });


    useEffect(() => {

        const handleChange = (e) => {

            if (e.type === 'language') {
                dispatch(setLangDirection(e.target.localStorage.lang === 'ar' ? 'rtl' : 'ltr'));
            }
        }

        window.addEventListener('language', handleChange);

        return () => {
            window.removeEventListener('language', handleChange);
        };
    }, []);

    useLayoutEffect(() => {
        document.body.setAttribute('dir', direction);
    }, [direction]);

    return (
        <CacheProvider value={direction === 'rtl' ? cacheRtl : cacheLtr}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar elevation={0} position="fixed" color="transparent" style={{padding:25, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box>
                        <Logo size={150} logo="white_logo.svg" />
                    </Box>
                    {/* <Box sx={{display: 'flex', gridColumnGap: 10, alignItems: 'center', justifyContent: 'flex-end'}}>
                        {user && (
                            <Box>
                                <UserDropdown />
                            </Box>
                        )}
                        <Box>
                            <LanguageSwitch />
                        </Box>

                    </Box> */}
                </AppBar>
                <div className={classes.root}>
                    <Card className={classes.card} elevation={1}>
                        <CardContent classes={{root: classes.CardContent}}>
                            <Box mb={5} xs={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Link href={route('login.show')}>
                                    <Logo size={280} logo="logo.svg" />
                                </Link>
                            </Box>
                            {children}
                        </CardContent>
                    </Card>
                    {flashMsg.success &&
                        <FlashMsg flashMsg={flashMsg} />
                    }
                    {flashMsg.error &&
                        <FlashMsg flashMsg={flashMsg} />
                    }
                </div>
                <Footer color="#fff" />
                <div className={classes.overlay}></div>
            </ThemeProvider>
        </CacheProvider>
    );
};
export default AuthLayout;
