import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterNewUser } from "../Api.js";

import "./Register.css";

export default function Register() {
    const [email, setEmail] = useState(0);
    const [confirmEmail, setConfirmEmail] = useState(0);
    const [password, setPassword] = useState(0);
    const [confirmPassword, setConfirmPassword] = useState(0);
    const navigate = useNavigate();

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangeConfirmEmail = (e) => {
        setConfirmEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const register = async () => {
        if (email !== confirmEmail) {
            alert("O email deve ser o mesmo em ambos os campos!");
        }

        if (password !== confirmPassword) {
            alert("A senha deve ser a mesma em ambos os campos!");
            return;
        }

        const registered = await RegisterNewUser(email, password);

        if (registered) {
            alert("Você foi registrado com sucesso!");
            navigate("../");

            return;
        }

        alert("Usuário já cadastrado!");
    }

    const cancel = () => {
        navigate("../");
    }

    return (
        <main>
            <img className="backgroundImage" src="/images/background.jpg" alt="Blured Background" ></img>
            <section className="logoSection">
                <img className="logo" src="/images/logo.png" alt="Netflix Logo" />
            </section>
            <section className="registerSection">
                <section className="registerForm">
                    <p>Registrar</p>
                    <input className="emailInput form" type="text" placeholder="Email" onChange={onChangeEmail} />
                    <input className="confirmEmailInput form" type="text" placeholder="Confirmar Email" onChange={onChangeConfirmEmail} />
                    <input className="passwordInput form" type="password" placeholder="Senha" onChange={onChangePassword} />
                    <input className="confirmPasswordInput form" type="password" placeholder="Confirmar Senha" onChange={onChangeConfirmPassword} />
                    <input className="registerNewUserButton form" type="button" value="Registrar" onClick={register} />
                    <input className="cancelButton form" type="button" value="Cancelar" onClick={cancel} />
                </section>
            </section>
        </main>
    );
}