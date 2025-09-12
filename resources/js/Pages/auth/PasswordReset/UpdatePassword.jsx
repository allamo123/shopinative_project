import React from "react";
import AuthLayout from "../../../Layouts/AuthLayout";
import { UpdatePasswordForm } from "../../../components/shared/forms/authentication/ResetPasswordForm/UpdatePasswordForm";

const UpdatePassword = ({ token }) =>{
    return <UpdatePasswordForm token={token} />;
}

UpdatePassword.layout = page => (
    <AuthLayout children={page} />
);

export default UpdatePassword;
