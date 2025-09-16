import React, { useEffect } from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { Box, Button, Grid, InputAdornment, makeStyles, TextField, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectedDirection } from "@/store/slices/langSlice";
import { RtlLabelStyle } from "@/RtlLabelStyle";
import NumberFormat from "react-number-format";
import { useTranslation } from "react-i18next";
import { Autocomplete } from "@material-ui/lab";
import { ArrowDropDown } from "@material-ui/icons";


const InformationsForm = ({ currencies, industries }) => {

    const { t } = useTranslation();

    const { app } = usePage().props;

    const { data, setData, post, errors } = useForm({
        store_industry: '',
        store_name: '',
        store_slogan: '',
        store_domain: '',
        store_email: '',
        store_phone: '',
        store_currency: '',
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
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Autocomplete
                    dir={direction}
                    autoFocus
                    options={industries}
                    getOptionLabel={(option) => option.name}
                    value={industries.find(opt => opt.id === data.store_industry) || null}
                    onChange={(event, newValue) => {
                        setData('store_industry', newValue ? newValue.id : '');
                    }}
                    renderInput={(params) => (
                        <TextField
                        dir={direction}
                        {...params}
                        label={t("labels.Store_industry")}
                        variant="outlined"
                        fullWidth
                        error={!!errors.store_industry}
                        inputProps={{
                            ...params.inputProps,
                            dir: direction,
                            style: { textAlign: direction === "rtl" ? "right" : "left" },
                        }}
                    />
                    )}
                />
                {errors.store_industry && (
                <Typography variant="subtitle2" color="error">
                    {errors.store_industry}
                </Typography>
                )}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
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
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                    label={t("labels.Store_slogan")}
                    variant="outlined"
                    type="text"
                    onChange={e => setData('store_slogan', e.target.value)}
                    value={data.store_slogan}
                    error={errors.store_slogan ? true : false}
                    fullWidth
                    required
                    classes={direction === 'rtl' ? {root: classes.rootInput} : {}}
                />
                {errors.store_slogan &&
                    <Typography variant="subtitle2" color="error">
                        {errors.store_slogan}
                    </Typography>
                }
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <NumberFormat
                    displayType="input"
                    type="text"
                    value={data.store_tax}
                    suffix=" %"
                    onValueChange={(e) => setData('store_tax', e.value)}
                    customInput={TextField}
                    label={t("labels.Store_tax")+' %'}
                    variant="outlined"
                    error={errors.store_tax ? true : false}
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
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Autocomplete
                    options={currencies}
                    getOptionLabel={(option) => `${option.name} (${option.code})`}
                    value={currencies.find(opt => opt.code === data.store_currency) || null}
                    onChange={(event, newValue) => {
                        setData('store_currency', newValue ? newValue.code : '');
                    }}
                    renderOption={(option) => (
                         <Box sx={{display: 'flex', gridColumnGap: 8, alignItems: 'center'}}>
                            <img src={`${window.location.origin}/${option.image}`} width={32}/>
                            {option.name} ({option.code})
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        label={t("labels.Store_currency")}
                        variant="outlined"
                        fullWidth
                        error={!!errors.store_currency}
                        required
                        classes={direction === 'rtl' ? { root: classes.rootInput } : {}}
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: data.store_currency ? (
                            <InputAdornment position="start">
                                    <img src={window.location.origin+'/'+currencies.find((currency) => currency.code === data.store_currency).image} width={32} />
                            </InputAdornment>
                            ) : null,
                        }}
                        />
                    )}
                    />
                    {errors.store_currency && (
                    <Typography variant="subtitle2" color="error">
                        {errors.store_currency}
                    </Typography>
                    )}

            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <NumberFormat
                    displayType="input"
                    type="tel"
                    format="###########"
                    value={data.store_phone}
                    onValueChange={(e) => setData('store_phone', e.value)}
                    customInput={TextField}
                    label={t("labels.Store_phone")}
                    variant="outlined"
                    error={errors.store_phone ? true : false}
                    fullWidth
                    required
                    InputProps={{
                        inputProps: {
                        dir: direction === "rtl" ? "rtl" : "ltr",
                        style: { textAlign: direction === "rtl" ? "right" : "left" },
                        },
                    }}
                />
                {errors.store_phone &&
                    <Typography variant="subtitle2" color="error">
                        {errors.store_phone}
                    </Typography>
                }
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
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
                    <Button variant="contained" size="large" onClick={handlSubmit} color="primary">
                        {t('buttons.Submit')}
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}

export default InformationsForm;
