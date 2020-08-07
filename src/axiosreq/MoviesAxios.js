import axios from "axios";

const api_key = process.env.api_key;
const collections = [
  `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
  `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_networks=213`,
  `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`,
  `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`,
  `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
  `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=primary_release_date.aesc&page=1&with_companies=420`,
  `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=9993`,
  `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&`,
];

async function getMovies(index, query) {
  let movies = { titles: [], images: [] };
  if (index !== 7) {
    const res = await axios.get(collections[index]);
    for (let movie of res.data.results) {
      if (movie.poster_path)
        movies.images.push(
          "https://image.tmdb.org/t/p/w185" + movie.poster_path
        );
      else movies.images.push("404");
      movies.titles.push(movie);
    }

    return movies;
  } else {
    const res = await axios.get(
      collections[index] + `query=${query}&page=1&include_adult=false`
    );
    for (let movie of res.data.results) {
      if (movie.poster_path)
        movies.images.push(
          "https://image.tmdb.org/t/p/w185" + movie.poster_path
        );
      else movies.images.push("404");
      movies.titles.push(movie);
    }
    return movies;
  }
}

export default getMovies;
