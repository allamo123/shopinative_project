import React, { memo } from "react";
import { Switch, Box, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export const PrimarySwitch = memo(({data, setData, target }) => {
    const { t } = useTranslation();

    const HandleChange = () => {
        console.log('hi');
        setData(target, Boolean(!data));
    };

    return (
        <Box>
            <Switch checked={data == 1 ? true : false} onChange={() => HandleChange()} color="primary" />
            <Typography variant="caption">
                {t('labels.Remember Me')}
            </Typography>
        </Box>
    );
});
