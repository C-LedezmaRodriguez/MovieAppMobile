import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

import NormalText from './NormalText.tsx';

import {Movie} from '../models/Movie.ts';

import {heights, widts} from '../constants/sizesScreen.ts';
import textApp from '../constants/textApp.ts';
import movieUtils from '../utils/movieUtils.ts';

type MovieItemProps = PropsWithChildren<{
  movie: Movie;
  goToMovieDetail: (movie: Movie) => void;
  margin?: {
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
  };
}>;

const MovieItem = ({
  movie,
  goToMovieDetail,
  margin = {marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0},
}: MovieItemProps) => {
  const styles = createStyles(margin);
  return (
    <TouchableOpacity
      onPress={() => goToMovieDetail(movie)}
      style={styles.touchContainer}>
      <View style={styles.container}>
        <Image
          source={{uri: movieUtils.getPosterUrl(movie)}}
          style={styles.poster}
        />
        <View style={styles.detail}>
          <NormalText text={movie.title} />
          <NormalText
            text={`${textApp.language}: ${movie.original_language}`}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const createStyles = ({
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
}) => {
  return StyleSheet.create({
    touchContainer: {
      height: heights.h35,
    },
    container: {
      width: widts.w45,
      height: heights.h35,
      marginTop: marginTop,
      marginBottom: marginBottom,
      marginLeft: marginLeft,
      marginRight: marginRight,
    },
    poster: {
      width: widts.w45,
      height: heights.h30,
      resizeMode: 'cover',
    },
    detail: {
      width: widts.w45,
      height: heights.h5,
    },
  });
};

export default MovieItem;
