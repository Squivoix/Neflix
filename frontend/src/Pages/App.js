import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Home from "./Home.js";

import './App.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}