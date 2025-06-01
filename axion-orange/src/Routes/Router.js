import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    </div>
  )
}

export default Router