import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import "./index.css";

import HomePage from './landing...page/home/HomePage';
import Signup from './landing...page/signup/Signup';
import AboutPage from './landing...page/about/AboutPage';
import ProductPage from './landing...page/products/ProductPage';
import PricingPage from './landing...page/pricing/PricingPage';
import SupportPage from './landing...page/support/SupportPage';
import NotFound from './landing...page/NotFound';
import Navbar from './landing...page/Navbar';
import Footer from './landing...page/Footer';
import Login from "./landing...page/login/Login";
import Careers from './landing...page/careers/Careers';
import Press from './landing...page/press/Press';
import Contact from './landing...page/contact/Contact';
import Market from './landing...page/market/Market';
import Downloads from './landing...page/downloads/Downloads';
import Videos from './landing...page/videos/Videos';
import Blog from './landing...page/blog/Blog';
import Tech from './landing...page/tech/Tech';
import OpenSource from './landing...page/open-source/OpenSource';
import Referral from './landing...page/referral/Referral';
import Charges from './landing...page/charges/Charges';
import SixtyDayChallenge from './landing...page/sixty-day-challenge/SixtyDayChallenge';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <UserProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/press" element={<Press />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/market" element={<Market />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/tech" element={<Tech />} />
                <Route path="/open-source" element={<OpenSource />} />
                <Route path="/referral" element={<Referral />} />
                <Route path="/charges" element={<Charges />} />
                <Route path="/challenge" element={<SixtyDayChallenge />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </UserProvider>
    </BrowserRouter>
);
