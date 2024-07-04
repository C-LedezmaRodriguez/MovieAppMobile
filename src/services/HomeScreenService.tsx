import {useEffect, useState} from 'react';

import MovieUtils from '../utils/movieUtils.ts';

import {MovieListProps} from '../models/MovieListProps.ts';

const useHomeService = () => {
  const [movieProps, setMovieProps] = useState<MovieListProps[]>([]);

  const getMovies = () => {
    const movies1: MovieListProps = {
      movies: MovieUtils.convertMovieMockDataToMovie(),
      title: 'Movies 1',
      subtitle: 'Subtitle 1',
    };
    const movies2: MovieListProps = {
      movies: MovieUtils.convertMovieMockDataToMovie(),
      title: 'Movies 2',
      subtitle: 'Subtitle 2',
    };
    const movie3: MovieListProps = {
      movies: MovieUtils.convertMovieMockDataToMovie(),
      title: 'Movies 3',
      subtitle: 'Subtitle 3',
    };

    setMovieProps([movies1, movies2, movie3]);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {movieProps};
};

const HomeService = {
  useHomeService,
};

export default HomeService;
