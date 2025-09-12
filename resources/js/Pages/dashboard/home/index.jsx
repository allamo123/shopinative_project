import React from "react";
import Dashboard from "../../../layouts/DashboardLayout/DashboardLayout";

const Home = () => {
    return <h1>Hello</h1>;
}

Home.layout = page => (
    <Dashboard children={page} />
);
export default Home;
