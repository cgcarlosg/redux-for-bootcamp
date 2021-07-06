import movies from './movies';

const exampleMovies = [{ title: 'movie1' }, { title: 'movie1' }, { title: 'movie1' }];

const initialState = {
  movies: [],
  requesting: false,
  error: '',
};

const exampleActionSuccess = {
  type: 'FETCH_MOVIES_SUCCESS',
  payload: exampleMovies,
};

const exampleActionFailure = {
  type: 'FETCH_MOVIES_FAILURE',
  payload: 404,
};

const exampleActionLoading = {
  type: 'FETCH_MOVIES_LOADING',
};

describe('state of movie is changed when a FETCH_MOVIES_SUCCESS is dispatched', () => {
  it('it should change the state using the payload object', () => {
    const result = movies(initialState, exampleActionSuccess);
    expect(result.movies).toEqual(exampleMovies);
  });

});

describe('state of movie is changed when a FETCH_MOVIES_FAILURE is dispatched', () => {
  it('it should change the state using the payload object', () => {
    const result = movies(initialState, exampleActionFailure);
    expect(result.movies).toEqual([]);
  });

});

describe('state of movie is changed when a FETCH_MOVIES_LOADING is dispatched', () => {
  it('it should reset the requesting state', () => {
    const result = movies(initialState, exampleActionLoading);
    expect(result.requesting).toBeTruthy();
  });
});
