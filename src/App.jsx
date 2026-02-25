import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Layout/Navbar";
import Home from "./component/Pages/Home/Home";
import Shop from "./component/Pages/About/shop";
import About from "./component/Pages/About/About";
import Service from "./component/Home/Service";
import Protfoli from "./component/Pages/About/Protfoli"
import Footer from "./component/Layout/Footer";
import Blog from "./component/Pages/About/blog"


function App() {
  return (
    <>
    
          <BrowserRouter>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={ <Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Service" element={<Service />} />
                    <Route path="/Shop" element={<Shop />} />
                    <Route path="/Protfoli" element={<Protfoli />} />
                    <Route path="/Blog" element={<Blog />} />
                    
        </Routes>
        <Footer/>
                </BrowserRouter>
                 
                 
      
    </>
  );
}

export default App;
