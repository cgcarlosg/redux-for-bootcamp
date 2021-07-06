import moviePage from './moviePage';

const exampleMovies = { title: 'movie1' };

const exampleActionSuccess = {
  type: 'SET_MOVIE_SUCCESS',
  payload: exampleMovies,
};

const exampleActionFailure = {
  type: 'SET_MOVIE_FAILURE',
  payload: 404,
};

const exampleActionLoading = {
  type: 'SET_MOVIE_LOADING',
};

const initialState = {
  movie: null,
  loading: false,
  error: null,
};

describe('state of movie is changed when a SET_MOVIE_SUCCESS is dispatched', () => {
  it('it should change the state using the payload object', () => {
    const result = moviePage(initialState, exampleActionSuccess);
    expect(result.movie).toEqual(exampleMovies);
  });

});

describe('state of movie is changed when a SET_MOVIE_FAILURE is dispatched', () => {
  it('it should change the state using the payload object', () => {
    const result = moviePage(initialState, exampleActionFailure);
    expect(result.movie).toEqual(null);
  });

});

describe('state of movie is changed when a SET_MOVIE_LOADING is dispatched', () => {
  it('it should reset the loading state', () => {
    const result = moviePage(initialState, exampleActionLoading);
    expect(result.loading).toBeTruthy();
  });
});