import { useState, useEffect } from "react";
import { getMoviesData } from "../../Api.js";

import './Row.css'

export default function Row({ title, path, isLarge, filter }) {
    const [movie, setMovie] = useState();
    const imageHost = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        const fetchMovies = async () => {
            const result = await getMoviesData(path, filter);

            return result;
        }

        const fetch = fetchMovies();

        fetch.then((data) => {
            setMovie(data?.results);
        })

    }, [path, filter]);

    return (
        <div className='row-container'>
            <h2 className='row-header'>{title}</h2>
            <div className='row-cards'>
                {movie?.map((movie) => {
                    return (
                        <img
                            className={`movie-card ${isLarge && "movie-card-large"}`}
                            key={movie.id}
                            src={imageHost + (isLarge ? movie.backdrop_path : movie.poster_path)}
                            alt={movie.name} >
                        </img>
                    )
                })}
            </div>
        </div>
    );
}