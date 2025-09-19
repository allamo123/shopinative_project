import React, { Fragment, useState } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import { Box, Button, Card, CardContent, CardHeader, Grid, IconButton, Typography } from "@material-ui/core";
import { HomeStyle } from "./HomeStyle";
import { Head, usePage } from "@inertiajs/inertia-react";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CollapsibleContent from "../../../components/shared/Collapsible/CollapsibleContent";

const Home = ({ tenant }) => {

    const classes = HomeStyle();

    const [isOpen, setIsOpen] = useState(true);

    const [isNestedOpen, setIsNestedOpen] = useState(null);

    const { auth } = usePage().props;

    const handleOpenCard = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Fragment>
             <Head>
                <title>{`${tenant?.store_name} dashboard`}</title>
             </Head>
            <Grid container spacing={0}>
                <Grid item md={12}>
                    <Box mt={2}>
                        <Typography className={classes.PageWelcome} variant="h5">
                            Welcome back <span className={classes.userName}>{auth.user.first_name} {auth.user.last_name}</span> to Your {tenant.store_name} Shop Admin Dashboard
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Manage your store, track performance, and stay in control with ease.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box mt={3} mb={1}>
                        <Card elevation={0}>
                            <CardHeader
                                title="Get started"
                                titleTypographyProps={{variant: 'h5'}}
                                subheader="Follow these guides to get started and explore as you go."
                                subheaderTypographyProps={{variant: 'caption'}}
                                action={<IconButton onClick={() => handleOpenCard()}>
                                    {isOpen ?
                                        <KeyboardArrowDownIcon />
                                        :
                                        <KeyboardArrowUpIcon />
                                    }
                                </IconButton>}
                                classes={{root:classes.cardHeaderRoot, title: classes.cardHeaderTitle, subheader: classes.cardHeaderSubheader}}
                            />
                            <CardContent className={isOpen ? classes.cardContent : classes.cardContentClosed}>
                                <Box mb={2} paddingX={1} borderRadius={15} sx={{backgroundColor: '#f5f5f5c2'}}>
                                    <CollapsibleContent title="Create a product"
                                        isNestedOpen={isNestedOpen}
                                        setIsNestedOpen={setIsNestedOpen}
                                        type="c_product"
                                    >
                                        <Box mb={4}>
                                            <Typography>Add products to showcase what you sell, including details and images to engage customers and start generating sales.</Typography>
                                        </Box>
                                        <Button variant="contained" size="small" color="primary">Add your first product now!</Button>
                                    </CollapsibleContent>
                                </Box>
                                <Box mb={2} paddingX={1} borderRadius={15} sx={{backgroundColor: '#f5f5f5c2'}}>
                                    <CollapsibleContent
                                        title="Customize your store"
                                        isNestedOpen={isNestedOpen}
                                        setIsNestedOpen={setIsNestedOpen}
                                        type="c_store"
                                    >
                                        <Box mb={4}>
                                            <Typography>Design your store to reflect your brand identity, and captivate your</Typography>
                                        </Box>
                                        <Button variant="contained" size="small" color="primary">Get creative now!</Button>
                                    </CollapsibleContent>
                                </Box>
                                <Box mb={2} paddingX={1} borderRadius={15} sx={{backgroundColor: '#f5f5f5c2'}}>
                                    <CollapsibleContent title="Setup Shipping Zones"
                                        isNestedOpen={isNestedOpen}
                                        setIsNestedOpen={setIsNestedOpen}
                                        type="c_product"
                                    >
                                        <Box mb={4}>
                                            <Typography>Add products to showcase what you sell, including details and images to engage customers and start generating sales.</Typography>
                                        </Box>
                                        <Button variant="contained" size="small" color="primary">Add your first product now!</Button>
                                    </CollapsibleContent>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Fragment>
    );
}

Home.layout = page => <DashboardLayout children={page} />;
export default Home;
