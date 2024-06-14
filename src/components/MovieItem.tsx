import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text} from 'react-native';

import {Movie} from '../models/Movie.ts';

type MovieItemProps = PropsWithChildren<{
  movie: Movie;
}>;

const MovieItem = ({movie}: MovieItemProps) => {
  return (
    <View>
      <Text>{movie.title}</Text>
    </View>
  );
};

export default MovieItem;
