import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {Movies} from "./movies";
import thunk from "redux-thunk";
import {createForms} from 'react-redux-form';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const AdvancedSearch = {
    query: '',
    year: '',
    type: '',
    plot: ''
};

    const store =  createStore(
        combineReducers({
            movies: Movies,
            ...createForms({
                advancedSearch: AdvancedSearch
            })
        }),
        composeEnhancer(applyMiddleware(thunk))
    );
    export default store;
// }