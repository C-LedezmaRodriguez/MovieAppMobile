import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {Movie} from '../models/Movie.ts';

type MovieItemProps = PropsWithChildren<{
  movie: Movie;
  goToMovieDetail: (movie: Movie) => void;
}>;

const MovieItem = ({movie, goToMovieDetail}: MovieItemProps) => {
  return (
    <TouchableOpacity onPress={() => goToMovieDetail(movie)}>
      <Text>{movie.title}</Text>
    </TouchableOpacity>
  );
};

export default MovieItem;
