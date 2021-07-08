import {
    useParams,
  } from "react-router-dom";
import { useEffect } from 'react';
import { singleMovieRequest } from '../redux/ThunkFunction';
import { connect } from 'react-redux';
import MovieInfo from '../components/MovieInfo'
const MoviePage = ({ movie }) => {
    const { id } = useParams();

    useEffect(() => {
        singleMovieRequest(id)
    }, []);


    return (
        <div>
             {movie ? <MovieInfo movie={movie} /> :<h1>{'Movie Not Found'}</h1>}
        </div>
    )
}

const mapStateToProps = state => ({ movie: state.moviePage.movie})

export default connect(mapStateToProps)(MoviePage);