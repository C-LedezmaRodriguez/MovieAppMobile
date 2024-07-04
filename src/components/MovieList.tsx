import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {Movie} from '../models/Movie.ts';
import MovieItem from './MovieItem.tsx';
import {heights, widts} from '../constants/sizesScreen.ts';
import BoldText from './BoldText.tsx';
import SubtitleText from './SubtitleText.tsx';

type MovieListProps = PropsWithChildren<{
  movies: Movie[];
  title?: string;
  subtitle?: string;
  goToMovieDetail: (movie: Movie) => void;
}>;

const MovieList = ({
  movies,
  title,
  subtitle,
  goToMovieDetail,
}: MovieListProps) => {
  const renderMovie = (movie: Movie) => {
    return (
      <MovieItem
        movie={movie}
        goToMovieDetail={goToMovieDetail}
        margin={{marginLeft: widts.w1}}
      />
    );
  };

  const renderTitle = () => {
    if (!title) {
      return <></>;
    }

    return <BoldText text={title} />;
  };

  const renderSubtitle = () => {
    if (!subtitle) {
      return <></>;
    }

    return <SubtitleText text={subtitle} />;
  };

  return (
    <View>
      {renderTitle()}
      {renderSubtitle()}
      <FlatList
        data={movies}
        style={styles.flatListContainer}
        horizontal={true}
        renderItem={({item}) => renderMovie(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    width: widts.w100,
    height: heights.h40,
  },
});

export default MovieList;
