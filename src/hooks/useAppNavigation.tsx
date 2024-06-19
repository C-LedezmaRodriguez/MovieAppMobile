import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';

const useAppNavigation = () => {
  const navigation = useNavigation();
  const useFocused = useIsFocused();
  const route = useRoute();

  const navigate = (screen: never, params?: any) => {
    if (params) {
      return navigation.navigate(screen, params as never);
    } else {
      return navigation.navigate(screen);
    }
  };

  const goBack = () => navigation.goBack();

  const getRouteName = () => {
    const size: number = navigation.getState()!.routes.length - 1;
    return navigation.getState()!.routes[size].name;
  };

  const navigateAndReset = (screen: never, params?: never) => {
    return navigation.reset({
      index: 0,
      routes: [{name: screen, params}],
    });
  };

  const getRouteParams = () => {
    return route.params ?? {};
  };

  return {
    navigation,
    navigate,
    goBack,
    getRouteName,
    useFocused,
    route: route,
    getRouteParams,
    navigateAndReset,
  };
};

export default useAppNavigation;
