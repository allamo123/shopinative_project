import React from "react";
import AuthLayout from "../../../Layouts/AuthLayout";
import { ResetPasswordForm } from "../../../components/shared/forms/authentication/ResetPasswordForm/ResetPasswordForm";

const PasswordReset = () => {
    return <ResetPasswordForm />;
}

PasswordReset.layout = page => <AuthLayout children={page} />
export default PasswordReset;
