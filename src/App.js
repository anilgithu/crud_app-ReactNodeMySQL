import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import React from "react";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hi Darling</h1>
        <ToastContainer position="top-center" />

        <Routes>
          <Route exact path="/" element={<Home /> } />
          <Route exact path="/addContact" element={<AddEdit /> } />
          <Route exact path="/update/:id" element={<AddEdit /> } />
          <Route exact path="/view/:id" element={<View /> } />
          
         

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
