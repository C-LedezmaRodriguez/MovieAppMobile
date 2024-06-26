import {Dimensions} from 'react-native';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const widts = {
  w100: widthScreen,
  w90: widthScreen * 0.9,
  w80: widthScreen * 0.8,
  w70: widthScreen * 0.7,
  w60: widthScreen * 0.6,
  w50: widthScreen * 0.5,
  w45: widthScreen * 0.45,
  w40: widthScreen * 0.4,
  w30: widthScreen * 0.3,
  w20: widthScreen * 0.2,
  w10: widthScreen * 0.1,
  w1: widthScreen * 0.01,
};

const heights = {
  h100: heightScreen,
  h90: heightScreen * 0.9,
  h80: heightScreen * 0.8,
  h70: heightScreen * 0.7,
  h60: heightScreen * 0.6,
  h50: heightScreen * 0.5,
  h40: heightScreen * 0.4,
  h30: heightScreen * 0.3,
  h20: heightScreen * 0.2,
  h10: heightScreen * 0.1,
  h1: heightScreen * 0.01,
};

const fontSizes = {
  f40: 40,
  f30: 30,
  f20: 20,
  f18: 18,
  f16: 16,
  f15: 15,
  f14: 14,
  f10: 10,
  f5: 5,
};

export {widts, heights, fontSizes};
