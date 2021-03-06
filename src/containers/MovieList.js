import React from 'react'

import store from '../redux/store';
import { useEffect } from 'react';
import { moviesRequest} from '../redux/thunkFunction';
import { connect } from 'react-redux';
import {getMoviesByFilter} from "../redux/getters";
import MovieCard from '../components/movieCard';
import GenreFilter from '../components/GenreFilter';
import { changeFilter } from '../redux/reducers/actionTypes'
import Styles from '../assets/stylesheet/MovieList.module.css'
import MainPost from '../components/MainPost'


const MovieList = ({ moviesList, changeFilter }) => {

    let mounthFirst = true;
    useEffect(() => {
        if (mounthFirst) {
            moviesRequest();
            mounthFirst = false;
        }
    }, []);
    return (
        <div>
            <MainPost />
            <h1 className={Styles.title}> TOP RATED MOVIES </h1>
            <GenreFilter changeFilter={changeFilter}></GenreFilter>
            <main className={Styles.displayList}>
                {moviesList && moviesList.length
            ? moviesList.map(movie => (
                <MovieCard movie={movie} key={movie.id}></MovieCard>
            ))
            : (<h1>No movies yet! :(</h1>)}
          </main>

        </div>
    )
}
const mapStateToProps = state => ({ moviesList: getMoviesByFilter(state)});

export default connect( mapStateToProps, { changeFilter } )( MovieList ); 
