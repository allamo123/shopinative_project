import React from "react";
import AuthLayout from "../../../layouts/AuthLayout";
import { Grid } from "@material-ui/core";
import { RegesterationForm } from "../../../components/shared/forms/authentication/Regesteration/RegesterationForm";

const Registeration = () => {

    return (
        <Grid container style={{justifyContent: 'center'}}>
           <RegesterationForm />
        </Grid>
    );
};
Registeration.layout = page => <AuthLayout children={page} />
export default Registeration;
