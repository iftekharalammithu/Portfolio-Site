import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagenotfound from "./Pages/Not-Found/Page-not-Found.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="*" element={<Pagenotfound />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
