import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { Link } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const movieDetails = useSelector(store => store.movieDetails)

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>Movie List</h1>
            <section className="movies">
                {movies.map(movie => {
                const getMovie = () => {
                dispatch( {
                        type: 'GET_MOVIE',
                        payload:{
                            id: movie.id,
                            title: movie.title,
                            poster: movie.poster,
                            description: movie.description
                            }
                        })
                    }
    return (
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <Link to="/details"> 
            <img src={movie.poster} alt={movie.title} onClick={getMovie}/>
            </Link>
            </div>
            
);
})}
        </section>
        </main>

    );
}

export default MovieList;