import HomeScreen from '../screens/HomeScreen.tsx';
import HomeScreenService from '../services/HomeScreenService.tsx';

const HomeScreenController = () => {
  const {movies} = HomeScreenService.useHomeService();

  return <HomeScreen movies={movies} />;
};

export default HomeScreenController;
