import React, { useState } from "react";
import Dashboard from "../../layouts/DashboardLayout/DashboardLayout";
import { Box, Card, CardHeader, Grid, Typography } from "@material-ui/core";
import { usePage } from "@inertiajs/inertia-react";
import { CardContent } from "@mui/material";
import InformationsForm from "../../components/shared/forms/SettingsnformationForms/InformationsForm";
import { useTranslation } from "react-i18next";

const Settings = () => {

    const { auth: { user }} = usePage().props;

    const { t } = useTranslation();

    return (
        <Grid container spacing={2}>
            <Grid item md={12}>
                <Box sx={{width: '50%', margin: 'auto'}}>
                    <Card elevation={12}>
                        <CardHeader
                            title={`👋 ${t('layouts.Hi')} ${ user.first_name } ${ user.last_name },`}
                            subheader={t("layouts.No_business_set")}
                        />
                        <CardContent>
                            <Box mb={4}>
                                <Typography variant="h5" style={{textTransform: 'capitalize'}}>{t('layouts.Get_started_bussiness')}!</Typography>
                            </Box>
                            <InformationsForm />
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </Grid>
    );
}

Settings.layout = page => (
    <Dashboard
        children={page}
        title="Bussiness_configurations"
        hideSideBar={true}
    />
);

export default Settings;
