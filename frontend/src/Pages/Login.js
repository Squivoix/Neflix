import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

    const login = () => {
        axios.post("http://localhost:8080/login", {
            email: email,
            password: password
        }).then((response) => {
            sessionStorage.setItem("sessionId", response?.data?.sessionId);

            if (sessionStorage.getItem("sessionId") !== "undefined") {
                navigate("home");
            } else {
                console.log("sessionId is undefined");
                alert("Usuário ou senha incorreta!");
            }
        }).catch((error) => {
            console.error(error);
        })
    }

    const register = () => {
        console.log("Route to register!");
    }

    return (
        <main>
            <img className="backgroundImage" src="/images/background.jpg" alt="Blured Background" ></img>
            <section className="logoSection">
                <img className="logo" src="/images/logo.png" alt="Netflix Logo"/>
            </section>
            <section className="loginSection">
                <section className="loginForm">
                    <p>Entrar</p>
                    <input className="emailInput form" type="text" placeholder="Email ou número de telefone" onChange={onChangeEmail} />
                    <input className="passwordInput form" type="text" placeholder="Senha" onChange={onChangePassword} />
                    <input className="loginButton form" type="button" value="Entrar" onClick={login} />
                    <input className="registerButton form" type="button" value="Registrar" onClick={register} />
                </section>
            </section>
        </main>
    );
}