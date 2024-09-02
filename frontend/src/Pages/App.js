import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Register from "./Register.js";
import Home from "./Home.js";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}