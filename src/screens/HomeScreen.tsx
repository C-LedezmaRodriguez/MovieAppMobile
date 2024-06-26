import {ReactElement} from 'react';
import {View, StyleSheet} from 'react-native';

import MovieItem from '../components/MovieItem.tsx';

import {Movie} from '../models/Movie';

type Props = {
  movies: Movie[];
  goToMovieDetail: (movie: Movie) => void;
};

const MovieList = ({movies, goToMovieDetail}: Props): ReactElement => {
  return (
    <View style={styles.container}>
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          movie={movie}
          goToMovieDetail={goToMovieDetail}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default MovieList;
