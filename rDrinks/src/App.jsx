import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <Router>
      <div className="font-mono text-black dark:text-white bg-white dark:bg-black">
        <Navbar />
        <div className="max-w-5xl mx-auto min-h-[calc(100vh-72px)] z-0">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/drink/:id" element={<ItemDetails />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
