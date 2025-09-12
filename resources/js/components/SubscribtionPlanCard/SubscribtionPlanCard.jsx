import React from "react";
import { Box, Button, Card, CardContent, CardHeader, Typography, makeStyles } from "@material-ui/core";
import NumberFormat from "react-number-format";
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import ImagesearchRollerOutlinedIcon from '@mui/icons-material/ImagesearchRollerOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import { useTranslation } from "react-i18next";
import { Inertia } from "@inertiajs/inertia";

const SubscribtionPlanCard = ({ plan, user }) => {

    const { t } = useTranslation();

    const handleSubscribe = () => {
        Inertia.post(route('subscribtion.checkout', {plan_id: plan.id}))
    };


    return (
        <Card elevation={12} style={{borderRadius: 25}}>
            <CardHeader
                style={{paddingBottom: 0, textAlign: 'center'}}
                title={t('layouts.'+plan.display_name+'_subscribtion')}
                subheader={
                    user.register_country.name === 'Egypt' ?
                        <NumberFormat prefix={t("layouts.Price")+" "} thousandSeparator displayType="text" value={plan.local_price} suffix=" EGP"  />
                        :
                        <NumberFormat prefix={t("layouts.Price")+" "} thousandSeparator displayType="text" value={plan.internation_price} suffix=" $"  />
                    }
                subheaderTypographyProps={{
                    variant: 'h6',
                    style:{
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                        color: '#111111'
                    }
                }}
                titleTypographyProps={{
                    style:{
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                    }
                }} />
            <CardContent>
                <Box mb={2}>
                    <Button
                        dir="ltr"
                        size="large"
                        variant="contained"
                        fullWidth
                        color="primary"
                        startIcon={<LoginOutlinedIcon color="inherit" />}
                        onClick={() => handleSubscribe()}
                    >
                            {t('buttons.Subscribe_now')}
                    </Button>
                </Box>
                <Box mb={2}>
                    <Typography variant="h5">{t('layouts.Features')}</Typography>
                </Box>
                <Box mb={2} sx={{display: 'flex', alignItems: 'center', gridColumnGap: 5}}>
                    <StorefrontIcon fontSize="small" color="inherit" />
                    <Typography variant="body2" color="inherit">{t('layouts.Full_branded_online_store')}</Typography>
                </Box>
                <Box mb={2} sx={{display: 'flex', alignItems: 'center', gridColumnGap: 5}}>
                    <AndroidIcon fontSize="small" color="inherit" />
                    <Typography variant="body2" color="inherit">{t('layouts.Android_app_with_your_store_name')}</Typography>
                </Box>
                <Box mb={2} sx={{display: 'flex', alignItems: 'center', gridColumnGap: 5}}>
                    <AppleIcon fontSize="small" color="inherit" />
                    <Typography variant="body2" color="inherit">{t('layouts.Ios_app_with_your_store_name')}</Typography>
                </Box>
                <Box mb={3} sx={{display: 'flex', alignItems: 'center', gridColumnGap: 5}}>
                    <BackupOutlinedIcon fontSize="small" color="inherit" />
                    <Typography variant="body1" color="inherit">{t('layouts.Auto_submit_app_to_play_and_app_store')}</Typography>
                </Box>
                <Box mb={2} sx={{display: 'flex', alignItems: 'center', gridColumnGap: 5}}>
                    <ShoppingCartCheckoutOutlinedIcon fontSize="small" color="inherit" />
                    <Typography variant="body2" color="inherit">{t('layouts.Admin_panel_to_manage_products_and_orders')}</Typography>
                </Box>
                <Box mb={2} sx={{display: 'flex', alignItems: 'center', gridColumnGap: 5}}>
                    <ImagesearchRollerOutlinedIcon fontSize="small" color="inherit" />
                    <Typography variant="body1" color="inherit">{t('layouts.Professional_and_customizable_design')}</Typography>
                </Box>
                <Box mb={2} sx={{display: 'flex', alignItems: 'center', gridColumnGap: 5}}>
                    <AddCardOutlinedIcon fontSize="small" color="inherit" />
                    <Typography variant="body2" color="inherit">{t('layouts.Flexible_payment_and_shipping_integrations')}</Typography>
                </Box>
                <Box mb={3} sx={{display: 'flex', alignItems: 'center', gridColumnGap: 5}}>
                    <SupportAgentOutlinedIcon fontSize="small" color="inherit" />
                    <Typography variant="body2" color="inherit">{t('layouts.Continuous_technical_support')}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default SubscribtionPlanCard;
