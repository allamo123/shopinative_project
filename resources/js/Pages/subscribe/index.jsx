import React from "react"
import Dashboard from "../../layouts/DashboardLayout/DashboardLayout";
import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import { usePage } from "@inertiajs/inertia-react";
import { useTranslation } from "react-i18next";
import SubscribtionPlanCard from "../../components/SubscribtionPlanCard/SubscribtionPlanCard";

const Style = makeStyles((theme)=> ({

    title: {
        [theme.breakpoints.up('md')]: {
           width: '50%',
           margin: 'auto'
        },
        [theme.breakpoints.down('md')]: {
           width: '100%'
        },
    },
}));

const Subscribe = ({ plans }) => {

    const  { auth: { user }} = usePage().props;

    const { t } = useTranslation();

    const classes = Style();

    return (
        <Grid container justifyContent="center" spacing={2}>
            <Grid item sm={12}>
                <Box className={classes.title} pt={3} mb={2} textAlign="center">
                    <Typography variant="h5">{t('layouts.Create_apps_and_websites_no_coding_needed')}</Typography>
                    <Typography variant="body1" color="textSecondary">{t('layouts.Subscription_slogan')}</Typography>
                </Box>
            </Grid>
            {plans.map((plan) => (
            <Grid key={plan.id} item md={3}>
                <SubscribtionPlanCard plan={plan} user={user} />
            </Grid>
            ))}
        </Grid>
    );
}

Subscribe.layout = page => (
    <Dashboard
        children={page}
        hideSideBar={true}
    />
);
export default Subscribe;
