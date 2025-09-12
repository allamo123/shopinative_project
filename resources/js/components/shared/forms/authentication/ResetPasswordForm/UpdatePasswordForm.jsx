import React from "react";
import {Box, Button, Divider, Grid, TextField, Typography, Checkbox} from '@material-ui/core';
import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import { useTranslation } from "react-i18next";
import { RtlLabelStyle } from "../../RtlLabelStyle";
import { useSelector } from "react-redux";
import { selectedDirection } from "@/store/slices/langSlice";
// import CircleClipLoader from "../../../Alerts/Loader/CircleClipLoader";

export const UpdatePasswordForm = ({ token }) => {

    const { t } = useTranslation();

    const rtlClasses = RtlLabelStyle();

    const direction = useSelector(selectedDirection);

    const { data, setData, post, processing, errors, setError  } = useForm({
        token: token,
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('password.update'), {
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
                    <Box textAlign="center">
                        <Typography variant="h5">Set New Passowrd</Typography>
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
                        error={errors.email ? true : false}
                        classes={direction === 'rtl' ? {root: rtlClasses.rootInput} : {}}
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
                        classes={direction === 'rtl' ? {root: rtlClasses.rootInput} : {}}
                    />
                    {errors.password && <Typography variant='subtitle2' color='error'>{errors.password}</Typography>}
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
                        label={t("labels.Password Confirmation")}
                        onChange={e => setData('password_confirmation', e.target.value)}
                        type="password"
                        required
                        value={data.password_confirmation}
                        error={errors.password_confirmation ? true : false}
                        classes={direction === 'rtl' ? {root: rtlClasses.rootInput} : {}}
                    />
                    {errors.password_confirmation && <Typography variant='subtitle2' color='error'>{errors.password_confirmation}</Typography>}
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
                            t('buttons.Update_password')
                        } */}
                       { t('buttons.Update_password')}

                    </Button>
                </Grid>
            </Grid>
        </form>
  );
};
