import react from "react";
import "./App.css";
import Navbar from "./component/Layout/Navbar";
import Home from "./component/Pages/Home/Home";

function App() {
  return (
    <>
      {/* <h1 className="text-4xl italic font-bold text-center underline uppercase bg-amber-900 h-96 pt-50 m-8">helllo</h1> */}

      <Navbar />
      <Home />
    </>
  );
}

export default App;
