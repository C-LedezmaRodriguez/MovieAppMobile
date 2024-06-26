import HomeScreen from '../screens/HomeScreen.tsx';
import HomeScreenService from '../services/HomeScreenService.tsx';

import useAppNavigation from '../hooks/useAppNavigation.tsx';

import {MOVIE_DETAIL_SCREEN} from '../constants/routesPath.ts';
import {Movie} from '../models/Movie.ts';

const HomeScreenController = () => {
  const {movies} = HomeScreenService.useHomeService();
  const {navigate} = useAppNavigation();

  const goToMovieDetail = (movie: Movie) => {
    navigate(MOVIE_DETAIL_SCREEN as never, {
      ...movie,
      release_date: movie.release_date.toISOString(),
    });
  };

  return <HomeScreen movies={movies} goToMovieDetail={goToMovieDetail} />;
};

export default HomeScreenController;
