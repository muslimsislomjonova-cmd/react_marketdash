import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Products from "./pages/Products";
import AddModal from "./pages/AddModal";
import EditProduct from "./pages/EditProduct";

import "./App.css"; // CSS import qilishni unutmang

function App() {
  return (
    <BrowserRouter>
      <div className="layout">

        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add" element={<AddModal />} />
            <Route path="/edit/:id" element={<EditProduct />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;