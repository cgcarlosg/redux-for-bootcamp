import React from 'react'
// import PropTypes from 'prop-types'
import store from '../redux/store'
// fetchMoviesFailure, fetchMoviesLoading
import {useEffect} from 'react';
import moviesRequest from '../redux/thunkFunction';
import { connect } from 'react-redux';

const MovieList = ({ moviesList }) => {
    console.log(store.getState())
    useEffect(() => {
        moviesRequest();
    });
    return (
        <div>
              <h1>{moviesList}</h1>
        </div>
    )
}

const mapStateToProps = state => ({ moviesList: state.movies.movies.join() });

export default connect( mapStateToProps )(MovieList);

// MovieList.propTypes = {

// }
