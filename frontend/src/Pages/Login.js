import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VerifyLogin } from "../Api.js";

import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(0);
    const navigate = useNavigate();

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const login = async () => {
        await VerifyLogin(email, password);

        if (sessionStorage.getItem("sessionId") !== "undefined") {
            navigate("home");
        } else {
            console.log("sessionId is undefined");
            alert("Usuário ou senha incorreta!");
        }
    }

    const register = () => {
        navigate("register");
    }

    return (
        <main>
            <img className="backgroundImage" src="/images/background.jpg" alt="Blured Background" ></img>
            <section className="logoSection">
                <img className="logo" src="/images/logo.png" alt="Netflix Logo" />
            </section>
            <section className="loginSection">
                <section className="loginForm">
                    <p>Entrar</p>
                    <input className="email form input" type="text" placeholder="Email" onChange={onChangeEmail} />
                    <input className="password form input" type="password" placeholder="Senha" onChange={onChangePassword} />
                    <input className="loginButton form" type="button" value="Entrar" onClick={login} />
                    <input className="registerButton form" type="button" value="Registrar" onClick={register} />
                </section>
            </section>
        </main>
    );
}