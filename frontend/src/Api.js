import axios from "axios";

export const categories = [
    {
        name: "trending",
        title: "Em Alta",
        path: "/trending/all/week",
        filter: "&language=pt-BR",
        isLarge: true,
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: "/discover/tv",
        filter: "&with_networks=213",
        isLarge: false,
    },
    {
        name: "topRated",
        title: "Populares",
        path: "/movie/top_rated",
        filter: "&language=pt-BR",
        isLarge: false,
    },
    {
        name: "comedy",
        title: "Comédias",
        path: "/discover/tv",
        filter: "&with_genres=35",
        isLarge: false,
    },
    {
        name: "romances",
        title: "Romances",
        path: "/discover/tv",
        filter: "&with_genres=10749",
        isLarge: false,
    },
    {
        name: "documentaries",
        title: "Documentários",
        path: "/discover/tv",
        filter: "&with_genres=99",
        isLarge: false,
    }
]

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

export const RegisterNewUser = async (email, password) => {
    return await axios.post("http://localhost:8080/register", {
        email: email,
        password: password
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log("An error has ocurred: " + error);
        return false;
    })
}

export const getMoviesData = async (path, filter) => {
    return await axios.get("http://localhost:8080/movies", {
        headers: {
            path: path,
            filter: filter
        }
    }).then((result) => {

        return result.data;
    });
}