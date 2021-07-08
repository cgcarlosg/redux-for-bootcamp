import React from 'react';
import renderer from 'react-test-renderer';
import GenreFilter from './GenreFilter'

it('Renders Filter Options', () => {
    const popular = renderer
      .create(
        <GenreFilter handleChange={() => 'Comedy'} Value="Comedy" />,
      )
      .toJSON();
  
    expect(popular).toMatchSnapshot();
  });