import React, { memo } from "react";
import {
    Box,
    Button,
    Divider,
    Grid,
    TextField,
    Typography,
} from '@material-ui/core';
import { useForm } from '@inertiajs/inertia-react';
import { Style } from "./Style";
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from "@inertiajs/inertia-react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectedDirection } from "@/store/slices/langSlice";
import { GoogleIcon } from "../../../icons/GoogleIcon";
// import CircleClipLoader from "../../../Alerts/Loader/CircleClipLoader";


export const RegesterationForm = () => {

    const { t } = useTranslation();

    const classes = Style();

    const direction = useSelector(selectedDirection);

    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation:'',
    });

    const handleSubmit = () => {
        post(route('registeration.submit'));
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
                        <Typography variant="h5"  style={{textAlign: 'center', marginBottom:25, fontSize:21}}>
                            {t('layouts.Registeration_page_title')}
                        </Typography>

                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.socialHolder}>
                            <Button
                             className={classes.facebookBtn}
                             variant="outlined"
                             color="default"
                             startIcon={<FacebookIcon htmlColor="#1976d2" style={{marginLeft: 10, marginRight: 10}}/>}
                             onClick={() => window.location = route('customer.social.login', ['facebook', 'register'])}
                            >
                                Facebook
                            </Button>
                            <Button
                                className={classes.googleBtn}
                                variant="outlined"
                                color="default"
                                onClick={() => window.location = route('customer.social.login', ['google', 'register'])}
                            >
                                <GoogleIcon />
                                Google
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} style={{paddingBottom: 0}}>
                        <div className={classes.dividersHolder}>
                            <Divider className={classes.divider} orientation="horizontal" variant="fullWidth" />
                                <Typography style={{padding:5}} variant="subtitle1">{t('layouts.Or')}</Typography>
                            <Divider className={classes.divider} orientation="horizontal" variant="fullWidth" />
                        </div>
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        variant="outlined"
                        label={t("labels.First Name")}
                        onChange={e => setData('first_name', e.target.value)}
                        required
                        value={data.first_name}
                        error={errors.first_name ? true : false}
                    />
                    {errors.first_name && <Typography variant='subtitle2' color='error'>{errors.first_name}</Typography>}
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        variant="outlined"
                        label={t("labels.Last Name")}
                        onChange={e => setData('last_name', e.target.value)}
                        required
                        value={data.last_name}
                        error={errors.last_name ? true : false}
                    />
                    {errors.last_name && <Typography variant='subtitle2' color='error'>{errors.last_name}</Typography>}
                    </Grid>
                    <Grid
                    item
                    md={12}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        variant="outlined"
                        label={t("labels.Email")}
                        onChange={e => setData('email', e.target.value)}
                        type="email"
                        required
                        value={data.email}
                        error={errors.email ? true : false}
                    />
                    {errors.email && <Typography variant='subtitle2' color='error'>{errors.email}</Typography>}
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        variant="outlined"
                        label={t("labels.Password")}
                        onChange={e => setData('password', e.target.value)}
                        value={data.password}
                        type="password"
                        error={errors.password ? true : false}
                    />
                    {errors.password && <Typography variant='subtitle2' color='error'>{errors.password}</Typography>}
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        variant="outlined"
                        label={t("labels.confirm password")}
                        onChange={e => setData('password_confirmation', e.target.value)}
                        type="password"
                        value={data.password_confirmation}
                    />
                    </Grid>
                </Grid>
            <Box
                mt={4}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={() => processing ? false : handleSubmit()}
                >
                    {/* {processing ?
                        <CircleClipLoader />
                        :
                        t('buttons.Create My Account')
                    } */}
                   { t('buttons.Create My Account')}
                </Button>
            </Box>
        </form>
  );
};
