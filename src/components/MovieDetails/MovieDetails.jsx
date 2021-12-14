import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function MovieDetails(props){

const dispatch = useDispatch();
const movieDetails = useSelector(store => store.movieDetails);
const genres = useSelector(store => store.genres);

useEffect(() => {
    dispatch({ 
        type: 'FETCH_GENRES', 
        payload: movieDetails.id });
}, []);

return(
    <div>
        <h1>Movie Details</h1>
        <h2>{movieDetails.title}</h2>
        <img src= {movieDetails.poster}/>
        <h3>{movieDetails.description}</h3>
            
        <h4>Genres</h4> 
        {genres.map(genre => { 
return ( 
        <div> 
            <h5>{genre.name}</h5> 
        </div> 
); 
})}
        </div>
)}

export default MovieDetails;