import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import CoinInfo from "./Pages/CoinInfo/CoinInfo";
import Home from "./Pages/Home/Home";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CoinInfo />} />
      </Routes>
    </>
  );
}

export default App;
