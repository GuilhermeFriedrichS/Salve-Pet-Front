import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"

import SignIn from "../pages/signin";
import Signout from "../pages/signout";
import Cat from "../pages/cat";
import Dog from "../pages/dog";
import Service from "../pages/service";
import Contact from "../pages/contact";
import ChangePassword from "../pages/change-account";
import About from "../pages/about";
import Help from "../pages/help";
import Home from "../pages/home";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signout" element={<Signout />} />
                <Route path="/service" element={<Service />} />
                <Route path="/dog" element={<Dog />} />
                <Route path="/cat" element={<Cat />} />
                <Route path="/contacts" element={<Contact />} />
                <Route path="/changepassword" element={<ChangePassword/>} />
                <Route path="/about" element={<About /> } />
                <Route path="/help" element={<Help />} />
                
            </Routes>        
        </BrowserRouter>
    )
}

export default AppRoutes