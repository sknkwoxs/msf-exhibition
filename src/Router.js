import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./publishing/Header";
import Footer from "./publishing/Footer";
import Main from "./publishing/Main";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
