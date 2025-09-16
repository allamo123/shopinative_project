import React, { Fragment } from "react";
import AuthLayout from "../../../layouts/AuthLayout";
import { Grid } from "@material-ui/core";
import { LoginForm } from "../../../components/shared/forms/authentication/Login/LoginForm";
import { Head } from "@inertiajs/inertia-react";

const Login = ({ tenant }) => {

    return (
        <Fragment>
            <Head>
                <title>{`${tenant?.store_name} dashboard login`}</title>
            </Head>
            <Grid container style={{ justifyContent: 'center' }}>
                <Grid item xs={12} md={12} lg={12}>
                    <LoginForm />
                </Grid>
            </Grid>
        </Fragment>
    );
};
Login.layout = page => <AuthLayout children={page} />
export default Login;
