import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import clsx from "clsx";
import { Container, Typography, ThemeProvider, CssBaseline, Grid, Box, Button } from "@material-ui/core";
import { usePage } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/inertia-react";
import { SidebarNavigation } from "../../components/layout//sidebar/SidebarNavigation";
import { Inertia } from "@inertiajs/inertia";
import SideBar from "../../components/layout/sidebar/SideBar";
import Loader from "@/components/shared/loader/Loader";
import { Header } from "./../../components/layout/Header/Header";
import { MainStyle, RtlMainStyle } from "./MainStyle";
import { theme } from "@/theme";
import { MainSidebar } from "../../components/layout/sidebar/SidebarLinks";
import Footer from '../../components/layout/Footer/Footer'
import { selectedDirection, setLangDirection } from "@/store/slices/langSlice";
import { useTranslation } from "react-i18next";
import createCache from "@emotion/cache";
import { useDispatch, useSelector } from "react-redux";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { HeaderTwo } from "../../components/layout/Header/HeaderTwo";
import { FlashMsg } from "../../components/shared/Alerts/FlashMsg/FlashMsg";

const DashboardLayout = ({ hideSideBar, children, head, title, BredcrumbLinks, TitleRightContent, extraLinks, type, target }) => {

    const { flashMsg, auth: { user } } = usePage().props;

    const direction = useSelector(selectedDirection);

    const classes = direction === 'ltr' ? MainStyle() : RtlMainStyle();

    const [isLoading, setIsLoading] = useState(false);

    const [open, setOpen] = useState(false);

    const { t } = useTranslation();

    const dispatch = useDispatch();

    Inertia.on('start', () => setIsLoading(true));

    Inertia.on('finish', () => setIsLoading(false));

    useEffect(() => {

        const handleChange = (e) => {

            if (e.type === 'language') {
                dispatch(setLangDirection(e.target.localStorage.lang === 'ar' ? 'rtl' : 'ltr'));
            }
        }

        window.addEventListener('language', handleChange);

        return () => {
            window.removeEventListener('language', handleChange);
            setIsLoading(false);
        };
    }, []);

    return (
            <Fragment>
                <Head title={`Shopinative | ${head}`} />
                <div style={{ height: '100vh' }}>
                    {/********header**********/}

                    {!hideSideBar ?
                        <Header open={open} setOpen={setOpen} />
                        :
                        <HeaderTwo />
                    }

                    {/********Sidebar**********/}
                    {!hideSideBar &&
                        <SideBar
                            open={open}
                            SidebarNavigation={SidebarNavigation}
                            isLoading={isLoading}
                            MainSidebarLinks={MainSidebar}
                        />
                    }

                    {/********page title & bredcrumb section*****/}
                    {title &&
                        <Box
                            className={clsx(classes.dynamicPageTitle, {
                                [classes.titlePadding]: !open
                            })}
                            mb={3}
                            sx={{
                                pt: 3,
                                pb: 3,
                                backgroundColor: '#92136c',
                                borderBottom: '1px solid rgb(227 227 227)',
                                borderTop: '1px solid rgb(227 227 227)'
                            }}
                        >
                            <Grid container justifyContent="space-between" alignItems="center" className={classes.pageTitleHeader} >
                                <div className={classes.pageTitle}>
                                    <Typography className={classes.Capitalize} variant="h6">
                                        {type !== 'show_tender' ?
                                            t('layouts.' + title)
                                            :
                                            `${t('layouts.Tender')} #${target.ref} ${t('layouts.Shipment from')} ${direction === 'ltr' ? target.pickup_location.city.english_name : target.pickup_location.city.arabic_name} ${t('layouts.to')} ${direction === 'ltr' ? target.city.english_name : target.city.arabic_name}`
                                        }
                                    </Typography>
                                </div>
                                {TitleRightContent &&
                                    <ShipmentStatusLabel TitleStatus={TitleRightContent.status} />
                                }
                                {BredcrumbLinks &&
                                    <Bcrumbs links={BredcrumbLinks} active={ActiveBredcrumb} title={title} />
                                }
                            </Grid>
                        </Box>}

                    {extraLinks &&
                        <Box
                            className={clsx(classes.dynamicPageTitle, {
                                [classes.titlePadding]: !open
                            })}
                            sx={{
                                backgroundColor: 'rgb(9 21 26)',
                                borderBottom: '1px solid rgb(227 227 227)'
                            }}
                        >
                            <Container>
                                <Box
                                    sx={{
                                        display: 'flex',
                                    }}
                                >
                                    {extraLinks.map(({ label, href, current }, index) =>
                                        <Button
                                            key={index}
                                            classes={{
                                                colorInherit: classes.buttonTextColor,
                                                label: classes.buttonLabel,
                                                text: classes.buttonTextType,
                                            }}
                                            className={clsx(classes.buttonTextType, {
                                                [classes.activeBtnLink]: current
                                            })}
                                            onClick={() => Inertia.visit(href)}
                                            color="inherit"
                                            variant="text"
                                        >
                                            {t('layouts.' + label)}
                                        </Button>
                                    )}
                                </Box>
                            </Container>
                        </Box>}

                    {/******main content******/}
                    <main className={clsx(classes.content, {
                        [classes.maxWidth]: !open,
                        [classes.noSideBarContent]: hideSideBar
                    })}>

                        {/********Content Area**********/}
                        <Container className={classes.middleContent}>

                            {isLoading &&
                                <Box sx={{ position: 'relative', height: '88vh' }}>
                                    <Loader spinner={true}>
                                        <Typography variant="subtitle2">{t('layouts.Please be patient')}</Typography>
                                    </Loader>
                                </Box>
                            }


                            <Box style={isLoading ? { display: 'none', position: 'relative' } : { display: 'block', marginBottom: 15 }}>
                                {children}
                            </Box>

                            <Footer sideBarStatus={open} color="#111" />
                        </Container>


                        <FlashMsg flashMsg={flashMsg} />
                    </main>
                </div>
            </Fragment>
    );
};
export default DashboardLayout;
