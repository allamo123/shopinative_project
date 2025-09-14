import React, { useEffect, useState} from "react";
import { Style } from "./Style";
import {Box, Button, Divider, Grid, TextField, Typography, Checkbox} from '@material-ui/core';
import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import FacebookIcon from '@material-ui/icons/Facebook';
import { GoogleIcon } from "../../../icons/GoogleIcon";
import { useTranslation } from "react-i18next";
import { RtlLabelStyle } from "../../RtlLabelStyle";
import { useSelector } from "react-redux";
import { selectedDirection } from "@/store/slices/langSlice";
import { PrimarySwitch } from "../../../Switches/PrimarySwitch/PrimarySwitch";
import CircleClipLoader from "../../../Alerts/Loader/CircleClipLoader";

export const LoginForm = ( ) => {

    const classes = Style();

    const { t } = useTranslation();

    const rtlClasses = RtlLabelStyle();

    const direction = useSelector(selectedDirection);

    const { data, setData, post, processing, errors, setError  } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('user.login'), {
            onError: (errors) => {
                console.log(errors);
            },
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
                    <div className={classes.socialHolder}>
                        <Button
                         className={classes.facebookBtn}
                         variant="outlined"
                         color="default"
                         startIcon={<FacebookIcon htmlColor="#1976d2" style={{marginLeft: 10, marginRight: 10}}/>}
                            onClick={() => window.location = route('user.social.login', ['facebook', 'login'])}
                        >
                            Facebook
                        </Button>
                        <Button
                            className={classes.googleBtn}
                            variant="outlined"
                            color="default"
                            onClick={() => window.location = route('user.social.login', ['google', 'login'])}
                        >
                            <GoogleIcon />
                            Google
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.dividersHolder}>
                        <Divider className={classes.divider} orientation="horizontal" variant="fullWidth" />
                            <Typography style={{padding:5}} variant="subtitle1">{t('layouts.Or')}</Typography>
                        <Divider className={classes.divider} orientation="horizontal" variant="fullWidth" />
                    </div>
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
                        error={errors.email ? true : false}
                        // classes={direction === 'rtl' ? {root: rtlClasses.rootInput} : {}}
                    />
                    {errors.email && <Typography variant='subtitle2' color='error'>{errors.email}</Typography>}
                </Grid>

                <Grid
                    item
                    md={12}
                    xs={12}
                    mb={3}
                >
                    <TextField
                        fullWidth
                        variant="outlined"
                        label={t("labels.Password")}
                        onChange={e => setData('password', e.target.value)}
                        type="password"
                        required
                        value={data.password}
                        error={errors.password ? true : false}
                        // classes={direction === 'rtl' ? {root: rtlClasses.rootInput} : {}}
                    />
                    {errors.password && <Typography variant='subtitle2' color='error'>{errors.password}</Typography>}
                </Grid>
                <Grid
                    item
                    md={12}
                    xs={12}
                    mb={3}
                >
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <PrimarySwitch data={data.remember} setData={setData} target="remember" />
                            <Link href={route('forgot.password')} className={classes.link}>
                                {t('layouts.Fogot_password')}
                            </Link>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Button
                        className={classes.continueBtn}
                        color="primary"
                        variant="contained"
                        size="large"
                        fullWidth
                        onClick={(e) => processing ? false : handleSubmit(e)}
                    >
                        {processing ?
                            <CircleClipLoader />
                            :
                            t('buttons.Login')
                        }
                    </Button>
                </Grid>
            </Grid>
        </form>
  );
};
