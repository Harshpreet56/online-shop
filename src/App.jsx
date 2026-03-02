import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import About from "./Pages/About/About";
import Service from "./component/Home/Service";
import Protfolio from "./Pages/Protfolio/Protfolio";
import Footer from "./Layout/Footer";
import Blog from "./Pages/Blog/Blog";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Logout from "./Auth/Logout";

function AppLayout() {
  const location = useLocation();

  // Hide Navbar & Footer on login & register
  const hideLayoutRoutes = ["/login", "/register"];
  const isAuthPage = hideLayoutRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      {!isAuthPage && <Navbar />}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/protfolio" element={<Protfolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
