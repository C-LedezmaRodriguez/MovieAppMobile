import {useEffect, useState} from 'react';

import MovieDetailScreen from '../screens/MovieDetailScreen.tsx';
import useAppNavigation from '../hooks/useAppNavigation.tsx';

import {Movie} from '../models/Movie.ts';

const MovieDetailScreenController = () => {
  const {getRouteParams} = useAppNavigation();
  const [movie, setMovie] = useState<Movie | null>(null);

  const getMovie = () => {
    const movie = getRouteParams() as Movie;
    setMovie(movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <MovieDetailScreen movie={movie} />;
};

export default MovieDetailScreenController;
