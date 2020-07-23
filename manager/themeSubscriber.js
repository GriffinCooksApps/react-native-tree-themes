import { useContext } from 'react';
import { _ThemeContent } from './ThemeProvider';



//TODO: Add validation to this.
export const geTheme = () => {
  return useContext(_ThemeContent);
};

//TODO: Add validation to this.
export const injectTheme = (classRef) => {
  return (props) => {
    {
      const theme = useContext(_ThemeContent);

      return (
        <classRef theme={theme} {...props} />
      )

    };

  }; 
}

