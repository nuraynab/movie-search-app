import React from 'react';
import MovieWrapper from './MovieWrapperComponent';
import {NotFound, MoviesContainer} from "../styles/MoviesStyledComponents";

function Movies(props) {

    const movies = props.movies.Response === 'True' ?
        props.movies.Search.map((movie, index) => (<MovieWrapper key={index} movie={movie} />))
        : null;

    const isFound = props.movies.Response;

    return(
        <div>
            <NotFound isFound={isFound}>
                <h2>Movies not found</h2>
            </NotFound>
            <MoviesContainer isFound={isFound}>
                {movies}
            </MoviesContainer>
        </div>

    )
}

export default Movies;

