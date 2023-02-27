import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"


import Home from "../pages/home";
import Signin from "../pages/signin";
import Signout from "../pages/signout";
import Cat from "../pages/cat";
import Dog from "../pages/dog";
import Service from "../pages/service";
import Contact from "../pages/contact";
import Posts from "../components/posts";
import PostPage from "../components/animal";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signout" element={<Signout />} />
                <Route path="/service" element={<Service />} />
                <Route path="/dog" element={<Dog />} />
                <Route path="/cat" element={<Cat />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/posts/*" element={<PostPage />} />
            </Routes>        
        </BrowserRouter>
    )
}

export default AppRoutes