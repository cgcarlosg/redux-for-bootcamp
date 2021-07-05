import store from './store'
import {fetchMoviesFailure, fetchMoviesLoading, fetchMoviesSuccess, setMovieSuccess, setMovieFailure, setMovieLoading} from './actionTypes'
import { getMovies, getSingleMovie } from '../api/requests'


export const moviesRequest = () => {
    store.dispatch(fetchMoviesLoading())
    const requestMovies = getMovies();
    requestMovies.then( (data) => {
        store.dispatch(fetchMoviesSuccess(data.results));
    })
    .catch((error) => {
        store.dispatch(fetchMoviesFailure(error));
    })
}

export const singleMovieRequest = (id) => {
    const requestMovie = getSingleMovie(id);
    requestMovie.then( (data) => {
        store.dispatch(setMovieSuccess(data));
    })
    .catch((error) => {
        store.dispatch(setMovieSuccess(error));
    })
}