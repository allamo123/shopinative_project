import React from "react";
import AuthLayout from "../../../layouts/AuthLayout";
import { Grid } from "@material-ui/core";
import { LoginForm } from "../../../components/shared/forms/authentication/Login/LoginForm";

const Login = () => {

    return (
        <Grid container style={{justifyContent: 'center'}}>
            <Grid item xs={12} md={12} lg={12}>
                <LoginForm />
            </Grid>
        </Grid>
    );
};
Login.layout = page => <AuthLayout children={page} />
export default Login;
