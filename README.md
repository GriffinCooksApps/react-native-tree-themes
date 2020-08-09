# react-native-tree-themes

*NOTICE:  This package is currently not working*

Allows you to create and manage themes in react-native using a theme tree.

Eventually this will be expanded to include a theme selection, 
and hopefully some really good default themes.

## Installation

Typescript not yet supported, it is on the Roadmap for version 0.2

```sh
npm install react-native-tree-themes
```

## Usage
First create a tree of themes.


```js
import {ThemeProvider, Themed, ThemeContext } from 'react-native-tree-themes';

const theme
{
  background:{
    style: {backgroundColor:'#77AADD', flex:1},
    bordered:{
      style: {borderWidth: 2, borderColor: 'black'}
    }
  }
}

function Ancestor = (props){
  return 
    <ThemeProvider theme={theme}>
      <Child />
    </ThemeProvider>
}

The child can either be themed or handle the context directly.

class Child {
  static theme = ThemeContext;
  render(){
    <Element style={theme.background_bordered}>
  }
}

or

const Child = Themed(class ChildComponent {
  static theme = ThemeContext;
  render(){
    return <Element style={theme.background-bordered}>
  }
});

```
## Components
Convention:  I replaced all standard components with components that start with t, so tView, tButton, etc.  

Text: Instead of having to type out a lot, I created shorthand for various text types.
 * t - Standard Themed Text
 * ti - Italic Themed Text
 * tb - Bold Themed Text
 * tib - Themed Italic and Bold text.


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
