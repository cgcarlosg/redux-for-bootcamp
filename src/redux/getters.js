import { genresMap, imgBaseUrl } from '../constants'
import store from '../redux/store';

const getMoviesByFilter = state => {
    const filter = state.filter;
    let movies = mapMovieInfo(state.movies)
    if (filter !== "All") {
   
        movies = movies.filter( movie => {
            return movie.genre === filter;
        })
    }
    return movies
}
const mapMovieInfo = state => {
    const movies = state.movies;
    const moviesWithUsefulAttributes = movies.map(movie => mappingMovies(movie));
    return moviesWithUsefulAttributes;
}
const setGenreById = id => ( genresMap[id]);
const mappingMovies = movie => {
    return {
        title: movie.title,
        id: movie.id,
        genre: setGenreById(movie.genre_ids[0]),
        imgUrl: imgUrl(movie.backdrop_path)
    }
}

const getMovieById = id => {
    const movie = store.getState().movies.movies
 
    return movie;
}

const imgUrl = imgCode => ( imgBaseUrl + imgCode );

export {getMoviesByFilter, getMovieById};