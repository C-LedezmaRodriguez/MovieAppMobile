import React, {ReactElement} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import MovieList from '../components/MovieList.tsx';

import {Movie} from '../models/Movie.ts';
import {MovieListProps} from '../models/MovieListProps.ts';

type Props = {
  movieProps: MovieListProps[];
  goToMovieDetail: (movie: Movie) => void;
};

const HomeScreen = ({movieProps, goToMovieDetail}: Props): ReactElement => {
  if (!movieProps || movieProps?.length === 0) {
    return <View />;
  }

  const renderMovieList = (movieListProps: MovieListProps) => {
    return (
      <MovieList
        movies={movieListProps.movies}
        title={movieListProps.title}
        subtitle={movieListProps.subtitle}
        goToMovieDetail={goToMovieDetail}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={movieProps}
        renderItem={({item}) => renderMovieList(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;
