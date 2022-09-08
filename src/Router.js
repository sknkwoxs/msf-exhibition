import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
// 작가 소개 페이지
import GaelTurine from "./pages/photographers/GaelTurine";
import AlessandroPenso from "./pages/photographers/AlessandroPenso";
import JohnVink from "./pages/photographers/JohnVink";
import DominicNahr from "./pages/photographers/DominicNahr";
import CedricGerbehaye from "./pages/photographers/CedricGerbehaye";
import HannahReyesMorales from "./pages/photographers/HannahReyesMorales";
import MassimoBerruti from "./pages/photographers/MassimoBerruti";
import AshfikaRahman from "./pages/photographers/AshfikaRahman";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/photographers/GaelTurine" element={<GaelTurine />} />
        <Route
          path="/photographers/AlessandroPenso"
          element={<AlessandroPenso />}
        />
        <Route path="/photographers/JohnVink" element={<JohnVink />} />
        <Route path="/photographers/DominicNahr" element={<DominicNahr />} />
        <Route
          path="/photographers/CedricGerbehaye"
          element={<CedricGerbehaye />}
        />
        <Route
          path="/photographers/HannahReyesMorales"
          element={<HannahReyesMorales />}
        />
        <Route
          path="/photographers/MassimoBerruti"
          element={<MassimoBerruti />}
        />
        <Route
          path="/photographers/AshfikaRahman"
          element={<AshfikaRahman />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
