import React from "react";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import { Box, Grid, Typography } from "@material-ui/core";
import { HomeStyle } from "./HomeStyle";
import { usePage } from "@inertiajs/inertia-react";

const Home = ({ tenant }) => {

    const classes = HomeStyle();

    const { auth } = usePage().props;

    return (
        <Grid container spacing={2}>
            <Grid item md={12}>
                <Box mt={2}>
                    <Typography className={classes.PageWelcome} variant="h5">
                        Welcome <span className={classes.userName}>{auth.user.first_name} {auth.user.last_name}</span> to Your {tenant.store_name} Shop Dashboard
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Manage your store, track performance, and stay in control with ease.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

Home.layout = page => (
    <DashboardLayout children={page} />
);
export default Home;
