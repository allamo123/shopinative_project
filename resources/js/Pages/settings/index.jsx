import React, { useState } from "react";
import Dashboard from "../../layouts/DashboardLayout/DashboardLayout";
import { Box, Card, CardHeader, Grid, Typography } from "@material-ui/core";
import { usePage } from "@inertiajs/inertia-react";
import { CardContent } from "@mui/material";
import InformationsForm from "../../components/shared/forms/SettingsnformationForms/InformationsForm";
import { useTranslation } from "react-i18next";
import SettingsLayout from "../../layouts/DashboardLayout/NestedLayout/SettingsLayout/SettingsLayout";
import StoreIcon from '@material-ui/icons/Store';

const Settings = ({ currencies, indusries }) => {

    const { auth: { user }} = usePage().props;

    const { t } = useTranslation();

    return (
        <Box sx={{width: '65%', margin: 'auto'}}>
            <Card elevation={5}>
                <CardHeader
                    title={`👋 ${t('layouts.Hi')} ${ user.first_name } ${ user.last_name },`}
                    subheader={t("layouts.No_business_set")}
                />
                <CardContent>
                    <Box mb={4}>
                        <Typography variant="h5" style={{textTransform: 'capitalize'}}>{t('layouts.Get_started_bussiness')}!</Typography>
                    </Box>
                    <InformationsForm currencies={currencies} industries={indusries} />
                </CardContent>
            </Card>
        </Box>
    );
}

Settings.layout = page => (
    <Dashboard
        title="Bussiness_configurations"
        children={page}
        hideSideBar={true}
    />
);

export default Settings;
