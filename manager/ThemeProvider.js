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
  if(index -1)
  
  return (
    <_ThemeContext.Provider value={theme}>
      {props.children}
    </_ThemeContext.Provider>
  );

}

export const setTheme = (theme) = {
  setState({theme, index: (state.index+1)});
}