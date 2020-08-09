# react-native-tree-themes

Allows you to create and manage themes in react-native using a theme tree.

## Installation

Typescript not yet supported, it is on the Roadmap for version 0.2

```sh
npm install react-native-tree-themes
```

## Usage

Import the theme provider near the start of your project.

```js
import {ThemeProvider, ThemeContext } from 'react-native-tree-themes';

function Ancestor = (props){
  return
    <ThemeProvider theme={theme}>
      <Child />
    </ThemeProvider>
}

The child can either be themed or handle the context directly.

class Child {
  static theme = ThemeContext.useContext;
  render(){
    <Element style={theme.background_bordered}>
  }
}

or

const Parent = Themed(class ChildComponent {
  render(){
    return
      <ThemedContext.Consumer>
        value = <Child theme={value} />
      </ThemedContext.Consumer>
  }
});

```

## Components

There are currently four030 componnents, though I plan to make more over the next few weeks.
<TT> - Themed text
<TI> - Themed Italics
<TB> - Themed bold

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
