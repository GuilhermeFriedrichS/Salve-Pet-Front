import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"

import SignIn from "../pages/signin";
import Signout from "../pages/signout";
import Service from "../pages/service";
import Contact from "../pages/contact";
import ChangePassword from "../pages/change-account";
import About from "../pages/about";
import Help from "../pages/help";
import Home from "../pages/home";
import PostPage from "../pages/animal/style";
import SearchAnimals from "../pages/search-animals";
import AnimalRegistration from "../pages/animal-registration";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/changepassword" element={<ChangePassword/>} />
                <Route path="/searchanimals" element={<SearchAnimals/>} />
                <Route path="/contacts" element={<Contact />} />
                <Route path="/about" element={<About /> } />
                <Route path="/help" element={<Help />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/posts/*" element={<PostPage />} />
                <Route path="/service" element={<Service />} />
                <Route path="/signout" element={<Signout />} />
                <Route path="/animalregistration" element={<AnimalRegistration/>} />
            </Routes>        
        </BrowserRouter>
    )
}

export default AppRoutes