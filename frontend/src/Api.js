import axios from "axios";

//const API_KEY = "264bb09ec4d858065cfb8860838a32ff";
const DNS = "https://api.themoviedb.org/3";

export const VerifyLogin = async (email, password) => {
    await axios.post("http://localhost:8080/login", {
        email: email,
        password: password
    }).then((response) => {
        sessionStorage.setItem("sessionId", response?.data?.sessionId);
    }).catch((error) => {
        console.error(error);
    })
}

export const getData = async (path) => {
    try {

        let URI = DNS + path
        let result = await fetch(URI);

        return result.json();
    } catch (error) {
        console.erro(error);
    }
}