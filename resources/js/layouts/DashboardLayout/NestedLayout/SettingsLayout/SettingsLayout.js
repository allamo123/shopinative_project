import React from "react";
import { SidebarNavigation } from "../../../../../components/Navigations/SidebarNavigation/SidebarNavigation";
import { SettingsNavigationLinks } from "../../../../../components/Navigations/SidebarNavigation/SidebarLinks";
import { Box, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectedDirection } from "../../../../../../../../../../resources/js/store/slices/langSlice";

const SettingsLayout = ({children}) => {

    const direction = useSelector(selectedDirection);

    return (
        <Box>
            <Grid container spacing={4}>
                <Grid item md={3} lg={3}>
                    <Box sx={direction === 'ltr' ? { height: '100%', borderRight: '1px solid #ddd'} : { height: '100%', borderLeft: '1px solid #ddd'}}>
                        <Box sx={{position: 'sticky', top: 15}}>
                            <SidebarNavigation links={SettingsNavigationLinks} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={9} lg={9}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    );
};
export default SettingsLayout;
