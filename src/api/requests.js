export const getAll = async () => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=d32935c9ba902f453e2cff810df3712a';
    const request = await fetch(url, { mode: 'cors' });
    if (request.status === 200) {
      const data = await request.json();
      return data;
    }
    throw Error(404);
};