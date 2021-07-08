import React from 'react';
import renderer from 'react-test-renderer';
import MovieInfo from './MovieInfo';


const movie = {
        "id": 19404,
        "original_language": "us",
        "original_title": "original",
        "overview": "Raj is a rich",
        "popularity": 19.252,
        "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
        "release_date": "1995-10-20",
        "title": "Dilwale Dulhania Le Jayenge",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 2996
};

it('Renders MovieInfo', () => {
  const popular = renderer
    .create(
      <MovieInfo movie={movie} />,
    )
    .toJSON();

  expect(popular).toMatchSnapshot();
});


