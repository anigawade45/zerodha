import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

// Fix incorrect import paths
import HomePage from './landing...page/home/HomePage';
import Signup from './landing...page/signup/Signup';
import Pricing from './landing...page/pricing/PricingPage';
import AboutPage from './landing...page/about/AboutPage';
import Support from './landing...page/support/SupportPage';
import Navbar from './landing...page/Navbar';
import Footer from './landing...page/Footer';
import NotFound from './landing...page/NotFound';
import ProductPage from './landing...page/products/ProductPage';

// Ensure the root element exists before rendering
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/support' element={<Support />} />
                <Route path='/products' element={<ProductPage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
} else {
    console.error("Root element not found. Ensure index.html has a <div id='root'></div>");
}
