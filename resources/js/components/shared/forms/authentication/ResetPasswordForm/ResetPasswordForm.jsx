import React from "react";
import {Box, Button, Divider, Grid, TextField, Typography } from '@material-ui/core';
import { useForm } from '@inertiajs/inertia-react';
import { useTranslation } from "react-i18next";
import { RtlLabelStyle } from "../../RtlLabelStyle";
import { useSelector } from "react-redux";
import { selectedDirection } from "@/store/slices/langSlice";
// import CircleClipLoader from "../..";

export const ResetPasswordForm = () => {

    const { t } = useTranslation();

    const rtlClasses = RtlLabelStyle();

    const direction = useSelector(selectedDirection);

    const { data, setData, post, processing, errors, setError  } = useForm({
        email: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('reset.password.link'), {
            onError: (error) => {
                console.log(error);
            },
            onSuccess: (e) => {
                console.log(e);
            }
        });
    }

  return (
        <form
         autoComplete="off"
         noValidate
        >
            <Grid
                container
                spacing={2}
                >
                <Grid item xs={12}>
                    <Box textAlign="center">
                        <Typography variant="h5">{t('layouts.Reset_passowrd')}</Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    md={12}
                    xs={12}
                >
                    <TextField
                        fullWidth
                        label={t("labels.Email")}
                        variant="outlined"
                        onChange={e => setData('email', e.target.value)}
                        type="email"
                        required
                        value={data.email}
                        error={Boolean(errors.email)}
                        classes={direction === 'rtl' ? {root: rtlClasses.rootInput} : {}}
                    />
                    {errors.email && (<Typography variant='subtitle2' color='error'>{errors.email}</Typography>)}
                </Grid>

                <Grid item xs={12}>
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        fullWidth
                        onClick={(e) => processing ? false : handleSubmit(e)}
                    >
                        {/* {processing ?
                            <CircleClipLoader />
                            :
                            t('buttons.Reset_password')
                        } */}
                        {t('buttons.Reset_password')}
                    </Button>
                </Grid>
            </Grid>
        </form>
  );
};
