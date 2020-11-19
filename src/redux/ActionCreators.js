import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import {apiKey} from '../APIkey';

export const searchMovies = text => dispatch => {
    dispatch({
        type: ActionTypes.SEARCH_MOVIES,
        payload: text
    });
};

export const addMovies = (movies) => ({
    type: ActionTypes.FETCH_MOVIES,
    payload: movies
})

export const addMovie = (movie) => ({
    type: ActionTypes.FETCH_MOVIE,
    payload: movie
})

export const fetchMovie = (id) => (dispatch) =>{

    const apiRoot = 'http://www.omdbapi.com';
    axios
        .get(`${apiRoot}/?apikey=${apiKey}&i=${id}`)
        .then(movie => dispatch(addMovie(movie.data)))
        .catch(err => console.log(err));

}

export const fetchMovies = (query, year, type, plot) => (dispatch) => {

    const apiRoot = 'http://www.omdbapi.com';
    axios
        .get(`${apiRoot}/?apikey=${apiKey}&s=${query}&y=${year}&type=${type}&plot=${plot}`)
        .then(movies => dispatch(addMovies(movies.data)))
        .catch(err => console.log(err));

}

export const isLoading = () => ({
    type: ActionTypes.MOVIES_LOADING
});


