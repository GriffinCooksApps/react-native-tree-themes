import React, { createContent, useState } from 'react';
import { defaultTheme } from '../themes/defaultTheme';
import { buildTheme } from './themeBuilder';

const defaultState = { theme: defaultTheme, index: -1 };

// eslint-disable-next-line react-hooks/rules-of-hooks
var [state, setState] = useState(defaultState);

export const _ThemeContext = createContent(themeBuilder.build(state.theme));

export const ThemeProvider = (props) => {
  return (
    <state.Provider>
      <_ThemeManager {...props} />
    </state.Provider>
  );
};

const _ThemeManager = (props) => {
  if (state.index - 1) {
    return (
      <_ThemeContext.Provider value={state.theme}>
        {props.children}
      </_ThemeContext.Provider>
    );
  }
};

/**
 * Sets the theme for the app.
 * @param {*} theme
 */
export const setTheme = (theme) => {
  const newIndex = state.index + 1;
  setState({
    theme,
    index: newIndex,
  });
};
