import { createContent, useState } from 'react';
import { defaultTheme } from '../themes/defaultTheme';
import { themeBuilder } from './themeBuilder';

const defaultState = { theme: defaultTheme, index: -1 };

var [state, setState] = useState(defaultState);

export const _ThemeContext = createContent(themeBuilder.build(state.theme));

export const ThemeProvider = (props) => {
  return (
    <state.Provider>
      <ThemeManager {...props} />
    </state.Provider>
  );
}

_ThemeManager = (props) => {
  if (index - 1)

    return (
      <_ThemeContext.Provider value={theme}>
        {props.children}
      </_ThemeContext.Provider>
    );

}

/**
 * Sets the theme for the app.
 * @param {*} theme 
 */
export const setTheme = (theme) => {

  const newIndex = state.index + 1;
  setState({ 
    theme, 
    index: newIndex
  });
}