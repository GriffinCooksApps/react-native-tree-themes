export * from lodash;
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

//TODO: remove the allStyleTypes one builder is checking styles.
export type coreThemes = {
  background: ViewStyle | allStyleTypes,
  text: TextStyle | allStyleTypes,
  TextItalic: TextStyle | allStyleTypes,
  TextBold: TextStyle | allStyleTypes,
}

export const isThemeTreeType = (obj: any): obj is ThemeTreeType => {
  if (obj['style']) return true;
  return false;
};

export type allStyleTypes = ViewStyle | TextStyle | ImageStyle;

export type ThemeType = {
  background?: ViewStyle,
  text?: TextStyle,
  TextItalic?: TextStyle,
  TextBold?: TextStyle,

  [key: string]: allStyleTypes
}

export type ThemeTreeType = {
  'style': allStyleTypes;
} & {[key:string]: any}


export interface ThemeWrapType {
  ClassRef: React.ReactNode,
}

export type ThemeTreeTypeHolder = {
  theme: ThemeTreeType
}

export type ThemeHolder = {
  theme: ThemeType
}

