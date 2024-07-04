import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, StyleSheet} from 'react-native';

import {lightTheme} from '../constants/theme.ts';
import {fontSizes} from '../constants/sizesScreen.ts';

type SubtitleTextProps = PropsWithChildren<{
  text: string;
  fontSize?: number;
  color?: string;
}>;

const SubtitleText = ({
  text = '',
  fontSize = fontSizes.f14,
  color = lightTheme.text,
}: SubtitleTextProps) => {
  const styles = createStyle(color, fontSize);
  return (
    <Text style={styles.text} allowFontScaling={false}>
      {text}
    </Text>
  );
};

const createStyle = (color = lightTheme.text, fontSize = fontSizes.f14) => {
  return StyleSheet.create({
    text: {color: color, fontSize: fontSize, fontWeight: '500'},
  });
};

export default SubtitleText;
