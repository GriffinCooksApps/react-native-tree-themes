import * as React from 'react';
import { View } from 'react-native';
import { ThemeContext, ThemeProvider } from 'react-native-tree-themes';

export default class App extends React.Component {

  render() {
    return (
      <ThemeProvider>
        <ChildClass />
      </ThemeProvider>
    );
  }
}

class ChildClass extends React.Component {

  render() {
    return (
      <ThemeContext.Consumer>
        {value =>
          <View style={[value.background, { flex: 1 }]} />
        }
      </ThemeContext.Consumer>
    );
  }
}
