export const getMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=d32935c9ba902f453e2cff810df3712a';
    const request = await fetch(url, { mode: 'cors' });
    if (request.status === 200) {
      const data = await request.json();
      return data;
    }
    throw Error(404);
};

export const getSingleMovie = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=b299ed7ff9b9312752b6eb948cd16555`;
  const request = await fetch(url, { mode: 'cors' });
  if (request.status == 200) {
    const data = await request.json();
    return data;
  }
  throw Error(404);
} 