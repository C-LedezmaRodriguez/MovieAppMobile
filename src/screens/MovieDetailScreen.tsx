import React from 'react';
import {View, Text} from 'react-native';

import StatusBarCustom from '../components/StatusBarCustom.tsx';

import {Movie} from '../models/Movie.ts';

type Props = {
  movie: Movie | null;
};

const MovieDetailScreen = ({movie}: Props) => {
  if (!movie) {
    return <></>;
  }

  return (
    <View>
      <StatusBarCustom />
      <Text>{movie.title}</Text>
      <Text>{movie.overview}</Text>
      <Text>{movie.vote_average}</Text>
    </View>
  );
};

export default MovieDetailScreen;
