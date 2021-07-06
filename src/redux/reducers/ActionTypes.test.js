import {
    fetchMoviesFailure,
    fetchMoviesLoading,
    fetchMoviesSuccess,
    changeFilter,
    setMovieLoading,
    setMovieSuccess,
    setMovieFailure,
  } from './actionTypes';

  const exampleMovies = [{ title: 'movie1' }, { title: 'movie1' }, { title: 'movie1' }];

  describe('Action Types for Movies', () => {
    it('fetchMoviesLoading return the right action type', () => {
        const action = fetchMoviesLoading();
    expect(action.type).toStrictEqual('FETCH_MOVIES_LOADING');
  });

  it('fetchMoviesFailure return the right action type', () => {
    const action = fetchMoviesFailure();
expect(action.type).toStrictEqual('FETCH_MOVIES_FAILURE');
});

it('fetchMoviesSuccess return the right action type', () => {
  const action = fetchMoviesSuccess();
expect(action.type).toStrictEqual('FETCH_MOVIES_SUCCESS');
});

it('Changes filter return the right action type', () => {
  const action = changeFilter();
expect(action.type).toStrictEqual('FILTER_CHANGE');
});

it('setMovieLoading return the right action type', () => {
  const action = setMovieLoading();
expect(action.type).toStrictEqual('SET_MOVIE_LOADING');
});

it('setMovieSuccess return the right action type', () => {
  const action = setMovieSuccess();
expect(action.type).toStrictEqual('SET_MOVIE_SUCCESS');
});



})
