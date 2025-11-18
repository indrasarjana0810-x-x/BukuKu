import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Buku from "./components/Buku";
import Detail from "./components/Detail";
import Keranjang from "./components/Keranjang";
import Penjualan from "./components/Penjualan";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Buku />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/keranjang" element={<Keranjang />} />
        <Route path="/penjualan" element={<Penjualan />} />
      </Routes>
    </BrowserRouter>
  );
}