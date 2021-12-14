import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function MovieDetails(props){

const dispatch = useDispatch();
const movieDetails = useSelector(store => store.movieDetails);
const genres = useSelector(store => store.genres);

return(
    <div>
        <h1>Movie Details</h1>
        <h2>{movieDetails.title}</h2>
        <img src= {movieDetails.poster}/>
        <h3>{movieDetails.description}</h3>
            </div>
)}

export default MovieDetails;