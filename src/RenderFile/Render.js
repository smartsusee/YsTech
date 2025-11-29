import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import IntrestCom from "../components/pages/IntrestBox/IntrestCom";

const RenderComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/intrestBox" element={<IntrestCom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RenderComponent;
