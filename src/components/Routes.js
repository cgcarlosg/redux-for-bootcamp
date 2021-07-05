import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MovieList from '../containers/MovieList'
import MoviePage from '../containers/MoviePage';
import Navbar from './Navbar';
import React from 'react';
import MainPost from './MainPost'

const Routes = () => {
    return (
        <div>
            <Router>
            <Navbar />
            <MainPost />
                <div data-testid="page-content">
                    <Switch>
                        <Route exact path="/">
                            <MovieList />
                        </Route>
                        <Route exact path="/movie/:id">
                            <MoviePage />
                        </Route>
                    </Switch>
                </div>
                <Link to={`/movie/${2}`}>Go</Link>
            </Router>
        </div>
    )
}

export default Routes