import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"

import SignIn from "../pages/signin";
import Contact from "../pages/contact";
import ChangePassword from "../pages/change-account";
import About from "../pages/about";
import Help from "../pages/help";
import Home from "../pages/home";
import PostPage from "../pages/animal";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/changepassword" element={<ChangePassword/>} />
                <Route path="/about" element={<About /> } />
                <Route path="/help" element={<Help />} />
                <Route path="/contat" element={<Contact />} />
                <Route path="/home/posts/*" element={<PostPage />} />
            </Routes>        
        </BrowserRouter>
    )
}

export default AppRoutes