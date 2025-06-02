import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import ProtectedRoutes from "./ProtectedRoutes";

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/home" element={<Home />} />
            </Route>
            
        </Routes>
    </div>
  )
}

export default Router