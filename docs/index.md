---
id: "index"
title: "react-native-tree-themes-example"
sidebar_label: "Globals"
---

## Index

### Enumerations

* [ObjReducerOptions](enums/objreduceroptions.md)

### Classes

* [App](classes/app.md)
* [ChildClass](classes/childclass.md)
* [ThemeError](classes/themeerror.md)
* [ThemeProvider](classes/themeprovider.md)

### Interfaces

* [ThemeWrapType](interfaces/themewraptype.md)

### Type aliases

* [ThemeHolder](index.md#themeholder)
* [ThemeTreeType](index.md#themetreetype)
* [ThemeTreeTypeHolder](index.md#themetreetypeholder)
* [ThemeType](index.md#themetype)
* [allStyleTypes](index.md#allstyletypes)
* [coreThemes](index.md#corethemes)

### Variables

* [ThemeContext](index.md#const-themecontext)
* [baseTheme](index.md#const-basetheme)
* [coreThemeTypes](index.md#const-corethemetypes)
* [defDarkTheme](index.md#const-defdarktheme)

### Functions

* [TB](index.md#const-tb)
* [TI](index.md#const-ti)
* [TIB](index.md#const-tib)
* [TT](index.md#const-tt)
* [buildTheme](index.md#buildtheme)
* [isThemeTreeType](index.md#const-isthemetreetype)
* [objectMap](index.md#const-objectmap)
* [processBranch](index.md#processbranch)

### Object literals

* [darkExtensions](index.md#const-darkextensions)
* [defLightTheme](index.md#deflighttheme)

## Type aliases

###  ThemeHolder

Ƭ **ThemeHolder**: *object*

#### Type declaration:

* **theme**: *[ThemeType](index.md#themetype)*

___

###  ThemeTreeType

Ƭ **ThemeTreeType**: *object & object*

___

###  ThemeTreeTypeHolder

Ƭ **ThemeTreeTypeHolder**: *object*

#### Type declaration:

* **theme**: *[ThemeTreeType](index.md#themetreetype)*

___

###  ThemeType

Ƭ **ThemeType**: *object*

#### Type declaration:

* \[ **key**: *string*\]: [allStyleTypes](index.md#allstyletypes) | undefined

* **TextBold**? : *TextStyle*

* **TextItalic**? : *TextStyle*

* **background**? : *ViewStyle*

* **text**? : *TextStyle*

___

###  allStyleTypes

Ƭ **allStyleTypes**: *ViewStyle | TextStyle | ImageStyle*

___

###  coreThemes

Ƭ **coreThemes**: *object*

#### Type declaration:

* **TextBold**: *TextStyle | [allStyleTypes](index.md#allstyletypes)*

* **TextItalic**: *TextStyle | [allStyleTypes](index.md#allstyletypes)*

* **background**: *ViewStyle | [allStyleTypes](index.md#allstyletypes)*

* **text**: *TextStyle | [allStyleTypes](index.md#allstyletypes)*

## Variables

### `Const` ThemeContext

• **ThemeContext**: *Context‹[ThemeType](index.md#themetype)›* = React.createContext<ThemeType>(baseTheme)

___

### `Const` baseTheme

• **baseTheme**: *NamedStyles‹any›* = buildTheme(defLightTheme)

___

### `Const` coreThemeTypes

• **coreThemeTypes**: *string[]* = [
  'background', 'text', 'textItalic', 'textBold'
]

___

### `Const` defDarkTheme

• **defDarkTheme**: *any[]* = _.values(_.merge(defLightTheme, darkExtensions))

## Functions

### `Const` TB

▸ **TB**(`props`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *void*

___

### `Const` TI

▸ **TI**(`props`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *void*

___

### `Const` TIB

▸ **TIB**(`props`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *void*

___

### `Const` TT

▸ **TT**(`props`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *void*

___

###  buildTheme

▸ **buildTheme**(`obj`: [ThemeTreeType](index.md#themetreetype)): *StyleSheet.NamedStyles‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [ThemeTreeType](index.md#themetreetype) |

**Returns:** *StyleSheet.NamedStyles‹any›*

___

### `Const` isThemeTreeType

▸ **isThemeTreeType**(`obj`: any): *obj is ThemeTreeType*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *obj is ThemeTreeType*

___

### `Const` objectMap

▸ **objectMap**(`obj`: Object, `fn`: Function): *void*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | Object |
`fn` | Function |

**Returns:** *void*

___

###  processBranch

▸ **processBranch**(`obj`: [ThemeTreeType](index.md#themetreetype), `styles`: object, `errors`: string[], `current`: [allStyleTypes](index.md#allstyletypes)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [ThemeTreeType](index.md#themetreetype) |
`styles` | object |
`errors` | string[] |
`current` | [allStyleTypes](index.md#allstyletypes) |

**Returns:** *void*

## Object literals

### `Const` darkExtensions

### ▪ **darkExtensions**: *object*

ThemeTreeType needs some corrections.  It should require that somewhere in the tree it has specific styles. It will notify you at run time.
 Required types:
 background: ViewStyle,
text: TextStyle,
textItalic: TextStyle,
textBold: TextStyle,
More to come.

###  style

• **style**: *object*

#### Type declaration:

▪ **background**: *object*

* **style**: *object*

  * **backgroundColor**: *string* = "black"

▪ **text**: *object*

* **style**: *object*

  * **color**: *string* = "#CCEEEE"

___

###  defLightTheme

### ▪ **defLightTheme**: *object*

###  style

• **style**: *object*

#### Type declaration:

▪ **background**: *object*

* **style**: *object*

  * **backgroundColor**: *string* = "white"

▪ **text**: *object*

* **style**: *object*

  * **color**: *string* = "#112222"

  * **fontFamily**: *string* = "sans-serif-medium"

* **textBold**: *object*

  * **style**: *object*

    * **fontWeight**: *string* = "900"

* **textHighlight**: *object*

  * **style**: *object*

    * **fontWeight**: *string* = "700"

* **textItalics**: *object*

  * **style**: *object*

    * **fontStyle**: *string* = "italic"
