import React from "react";
import AuthLayout from "../../../layouts/AuthLayout";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { useForm } from "@inertiajs/inertia-react";
import CircleClipLoader from "../../../components/shared/loader/Loader";
import { useTranslation } from "react-i18next";

const Verification = () => {

    const  { t } = useTranslation();

    const { processing, post } = useForm();

    const handleSubmit = () => {
        post(route('verification.send'));
    };

    return (
        <Grid container spacing={2}>
            <Grid item sm={12}>
                <Box textAlign="center">
                    <Typography variant="h6">{t('layouts.Didnt_got_verifivcation_email')}</Typography>
                    <Typography variant="body2">{t('layouts.Check_mail')}</Typography>
                </Box>
            </Grid>
            <Grid item sm={12}>
                <Button
                    onClick={() => processing ? false : handleSubmit()}
                    size="large"
                    variant="contained"
                    fullWidth
                    color="primary"
                >
                    {processing ?
                        <CircleClipLoader />
                        :
                        t('buttons.Resend_verification_email')
                    }
                </Button>
            </Grid>
        </Grid>
    )
}

Verification.layout = page => (
    <AuthLayout children={page} />
);

export default Verification;
