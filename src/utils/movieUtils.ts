import mockData from '../data/mockDataMovie.json';
import {Movie} from '../models/Movie.ts';

const posterPath = 'https://image.tmdb.org/t/p/w500';

const convertMovieMockDataToMovie = (): Movie[] => {
  return mockData.map(movie => {
    return {
      adult: movie.adult,
      backdrop_path: movie.backdrop_path,
      genre_ids: movie.genre_ids,
      id: movie.id,
      original_language: movie.original_language,
      original_title: movie.original_title,
      overview: movie.overview,
      popularity: movie.popularity,
      poster_path: movie.poster_path,
      release_date: new Date(movie.release_date),
      title: movie.title,
      video: movie.video,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
    };
  });
};

const getPosterUrl = (movie: Movie): string => {
  return `${posterPath}${movie.poster_path}`;
};

const MovieUtils = {
  convertMovieMockDataToMovie,
  getPosterUrl,
};

export default MovieUtils;
