import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import { UserProvider } from './components/UserContext';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </UserProvider>
  </BrowserRouter>
);
