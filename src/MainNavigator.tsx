import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreenController from './controllers/HomeScreenController.tsx';
import MovieDetailScreenController from './controllers/MovieDetailScreenController.tsx';
import {HOME_SCREEN, MOVIE_DETAIL_SCREEN} from './constants/routesPath.ts';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME_SCREEN}>
        <Stack.Screen name={HOME_SCREEN} component={HomeScreenController} />
        <Stack.Screen
          name={MOVIE_DETAIL_SCREEN}
          component={MovieDetailScreenController}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
