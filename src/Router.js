import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";

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
