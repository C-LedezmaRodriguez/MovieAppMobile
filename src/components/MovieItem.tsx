import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

import NormalText from './NormalText.tsx';

import {Movie} from '../models/Movie.ts';

import {heights, widts} from '../constants/sizesScreen.ts';
import textApp from '../constants/textApp.ts';

type MovieItemProps = PropsWithChildren<{
  movie: Movie;
  goToMovieDetail: (movie: Movie) => void;
}>;

const MovieItem = ({movie, goToMovieDetail}: MovieItemProps) => {
  return (
    <TouchableOpacity onPress={() => goToMovieDetail(movie)}>
      <View style={styles.container}>
        <Image source={{uri: movie.poster_path}} style={styles.poster} />
        <NormalText text={movie.title} />
        <NormalText text={`${textApp.language}: ${movie.original_language}`} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widts.w45,
  },
  poster: {
    width: widts.w45,
    height: heights.h30,
    resizeMode: 'cover',
  },
});

export default MovieItem;
