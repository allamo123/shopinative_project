import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectedDirection } from "../../../../store/slices/langSlice";
import { SettingSidebarNavigation } from "../../../../components/layout/sidebar/SettingSidebarNavigation";
import { SettingsNavigationLinks } from "../../../../components/layout/sidebar/SidebarLinks";


const SettingsLayout = ({children, sectionTitle, sectionIcon}) => {

    const direction = useSelector(selectedDirection);

    return (
        <Box sx={{ width: '85%', margin: 'auto'}}>
            <Grid container spacing={4}>
                <Grid item md={3} lg={2}>
                    <SettingSidebarNavigation menu={SettingsNavigationLinks} />
                </Grid>
                <Grid item md={9} lg={9}>
                    <Box mb={1} sx={{display: 'flex', gridColumnGap: 8, alignItems: 'center'}}>
                        {sectionIcon}
                        <Typography variant="h6" color="inherit">{sectionTitle}</Typography>
                    </Box>

                    {children}
                </Grid>
            </Grid>
        </Box>
    );
};
export default SettingsLayout;
