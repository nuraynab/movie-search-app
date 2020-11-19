import React from 'react';
import {MovieCard, Title} from "../styles/MoviesStyledComponents";

function MovieWrapper(props) {
    return(
        <MovieCard>
            <div >
                    <img src={props.movie.Poster} alt="Movie Cover" />
                    <Title href={'/movie/' + props.movie.imdbID}>
                        {props.movie.Title} ({props.movie.Year})
                    </Title>
            </div>
        </MovieCard>
    )
}

export default MovieWrapper;

