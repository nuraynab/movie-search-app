import * as ActionTypes from './ActionTypes';

export const Movies = (state = {
    isLoading: false,
    query: '',
    movie: [],
    movies: []}, action) => {
    switch (action.type) {
        case ActionTypes.SEARCH_MOVIES:
            return {...state, isLoading: false, query: action.payload};
        case ActionTypes.FETCH_MOVIES:
            return {...state, isLoading: false, movies: action.payload}
        case ActionTypes.FETCH_MOVIE:
            return {...state, isLoading: false, movie: action.payload};
        case ActionTypes.MOVIES_LOADING:
            return {...state, isLoading: true};
        default:
            return state;
    }
}