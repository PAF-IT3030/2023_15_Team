import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Divider } from "@mui/material";

function MainLayout(){

    return(
        <>
        <NavBar/>
        <Divider/>
        <Outlet/>
        </>
    )

}

export default MainLayout