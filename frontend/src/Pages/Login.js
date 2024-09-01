import "./Login.css";

export default function Login() {
    return (
        <main>
            <img className="backgroundImage" src="/images/background.jpg" ></img>
            <section className="logoSection">
                <img className="logo" src="/images/logo.png" alt="Netflix Logo"/>
            </section>
            <section className="loginSection">
                <section className="loginForm">
                    <text>Entrar</text>
                    <input className="emailInput form" type="text" placeholder="Email ou número de telefone" />
                    <input className="passwordInput form" type="text" placeholder="Senha" />
                    <input className="loginButton form" type="button" value="Entrar" />
                    <input className="registerButton form" type="button" value="Registrar" />
                </section>
            </section>
        </main>
    );
}