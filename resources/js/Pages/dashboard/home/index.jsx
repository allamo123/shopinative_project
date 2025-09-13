import React from "react";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";

const Home = () => {
    return <h1>Hello</h1>;
}

Home.layout = page => (
    <DashboardLayout children={page} />
);
export default Home;
