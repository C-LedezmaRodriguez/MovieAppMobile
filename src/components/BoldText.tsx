import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, StyleSheet} from 'react-native';

import {lightTheme} from '../constants/theme.ts';
import {fontSizes} from '../constants/sizesScreen.ts';

type BoldTextProps = PropsWithChildren<{
  text: string;
  fontSize?: number;
  color?: string;
}>;

const BoldText = ({
  text = '',
  fontSize = fontSizes.f14,
  color = lightTheme.text,
}: BoldTextProps) => {
  const styles = createStyle(color, fontSize);
  return (
    <Text style={styles.text} allowFontScaling={false}>
      {text}
    </Text>
  );
};

const createStyle = (color = lightTheme.text, fontSize = fontSizes.f14) => {
  return StyleSheet.create({
    text: {color: color, fontSize: fontSize, fontWeight: 'bold'},
  });
};

export default BoldText;
