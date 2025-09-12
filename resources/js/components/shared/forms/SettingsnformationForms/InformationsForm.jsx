import React, { useEffect } from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectedDirection } from "@/store/slices/langSlice";
import { RtlLabelStyle } from "@/RtlLabelStyle";
import NumberFormat from "react-number-format";
import { useTranslation } from "react-i18next";

const InformationsForm = () => {

    const { t } = useTranslation();

    const { app } = usePage().props;

    const { data, setData, post, errors } = useForm({
        store_name: '',
        store_domain: '',
        store_email: '',
        store_phone: '',
        store_tax: '',
    });

    const classes = RtlLabelStyle();


    const direction = useSelector(selectedDirection);

    const handlSubmit = () => {
        console.log(data);
        post(route('setup.store'));
    };

    useEffect(() => {
        setData('store_domain', data.store_name.toLowerCase().replaceAll(' ', '-'))
    }, [data.store_name])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <TextField
                    autoFocus
                    label={t("labels.Store_name")}
                    variant="outlined"
                    type="text"
                    onChange={e => setData('store_name', e.target.value)}
                    value={data.store_name}
                    error={errors.store_name ? true : false}
                    fullWidth
                    required
                    classes={direction === 'rtl' ? {root: classes.rootInput} : {}}
                />
                {errors.store_name &&
                    <Typography variant="subtitle2" color="error">
                        {errors.store_name}
                    </Typography>
                }
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <TextField
                    label={t("labels.Store_domain")}
                    variant="outlined"
                    type="text"
                    onChange={e => setData('store_domain', e.target.value.toLowerCase().replaceAll(' ', '-'))}
                    value={data.store_domain}
                    error={errors.store_domain ? true : false}
                    fullWidth
                    required
                    classes={direction === 'rtl' ? {root: classes.rootInput} : {}}
                    InputProps={{
                        endAdornment: <span style={{padding: '0 15px'}}>.{app.domain}</span>
                    }}
                />
                {errors.store_domain &&
                    <Typography variant="subtitle2" color="error">
                        {errors.store_domain}
                    </Typography>
                }
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <NumberFormat
                    displayType="input"
                    type="text"
                    value={data.store_tax}
                    suffix=" %"
                    onValueChange={(e) => setData('store_tax', e.value)}
                    customInput={TextField}
                    label={t("labels.Store_tax")+' %'}
                    variant="outlined"
                    fullWidth
                    required
                    classes={direction === 'rtl' ? {root: classes.rootInput} : {}}
                />
                {errors.store_tax &&
                    <Typography variant="subtitle2" color="error">
                        {errors.store_tax}
                    </Typography>
                }
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <NumberFormat
                    displayType="input"
                    type="tel"
                    format="###########"
                    value={data.store_phone}
                    onValueChange={(e) => setData('store_phone', e.value)}
                    customInput={TextField}
                    label={t("labels.Store_phone")}
                    variant="outlined"
                    fullWidth
                    required
                    classes={direction === 'rtl' ? {root: classes.rootInput} : {}}
                />
                {errors.store_phone &&
                    <Typography variant="subtitle2" color="error">
                        {errors.store_phone}
                    </Typography>
                }
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <TextField
                    autoFocus
                    label={t("labels.Store_email")}
                    variant="outlined"
                    type="email"
                    onChange={e => setData('store_email', e.target.value)}
                    value={data.store_email}
                    error={errors.store_email ? true : false}
                    fullWidth
                    required
                    classes={direction === 'rtl' ? {root: classes.rootInput} : {}}
                />
                {errors.store_email &&
                    <Typography variant="subtitle2" color="error">
                        {errors.store_email}
                    </Typography>
                }
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box mt={3} mb={3}>
                    {errors.service &&
                        <Box mb={4}>
                            <Typography variant="subtitle2" color="error">
                                {errors.service}
                            </Typography>
                        </Box>
                    }
                    <Button variant="contained" onClick={handlSubmit} color="primary">
                        {t('buttons.Submit')}
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}

export default InformationsForm;
