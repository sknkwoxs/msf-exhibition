import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import Address from "./pages/Address";
// 사진전 소개 페이지
import Summary from "./pages/introduction/Summary";
import Greetings from "./pages/introduction/Greetings";
// 작가 소개 페이지
import GaelTurine from "./pages/photographers/GaelTurine";
import AlessandroPenso from "./pages/photographers/AlessandroPenso";
import JohnVink from "./pages/photographers/JohnVink";
import DominicNahr from "./pages/photographers/DominicNahr";
import CedricGerbehaye from "./pages/photographers/CedricGerbehaye";
import HannahReyesMorales from "./pages/photographers/HannahReyesMorales";
import MassimoBerruti from "./pages/photographers/MassimoBerruti";
import AshfikaRahman from "./pages/photographers/AshfikaRahman";
// Error
import Error404 from "./pages/Error404";
import Error403 from "./pages/Error403";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/Address" element={<Address />} />
        {/* 사진전 소개 페이지 */}
        <Route path="/introduction/Summary" element={<Summary />} />
        <Route path="/introduction/Greetings" element={<Greetings />} />
        {/* 작가 소개 페이지 */}
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
        <Route path="*" element={<Error404 />} />
        <Route path="/Error403" element={<Error403 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
