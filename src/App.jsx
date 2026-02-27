import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import About from "./Pages/About/About";
import Service from "./component/Home/Service";
import Protfolio from "./Pages/Protfolio/Protfolio";
import Footer from "./Layout/Footer";
import Blog from "./Pages/Blog/Blog";


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
                    <Route path="/Protfolio" element={<Protfolio />} />
                    <Route path="/Blog" element={<Blog />} />
                    
        </Routes>
        <Footer/>
                </BrowserRouter>
                 
                 
      
    </>
  );
}

export default App;
