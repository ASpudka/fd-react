import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index.js";
import Home from "./pages/Home.js";
import SingUp from "./pages/Authorization.js";
import Registration from "./pages/Registration.js";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SingUp />} />
        <Route path="/signup" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
