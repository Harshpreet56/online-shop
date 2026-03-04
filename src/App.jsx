import React from "react";
import { ProductProvider } from "./context/ProductProvider";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import About from "./Pages/About/About";
import Service from "./component/Home/Service";
import Protfolio from "./Portfolio/Home/Home";
import Footer from "./Layout/Footer";
import Blog from "./Pages/Blog/Blog";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Logout from "./Auth/Logout";
import ForgetPassword from "./Auth/Forget";
import ProductDetails from "./Cart/Product";
import Cart from "./Cart/Cart";

function AppLayout() {
  const location = useLocation();

  const hideLayoutRoutes = ["/login", "/register", "/forgetpassword"];
  const isAuthPage = hideLayoutRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      {!isAuthPage && <Navbar />}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/protfolio" element={<Protfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
