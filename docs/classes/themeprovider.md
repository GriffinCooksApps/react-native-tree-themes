---
id: "themeprovider"
title: "ThemeProvider"
sidebar_label: "ThemeProvider"
---

## Type parameters

▪ **SS**

## Hierarchy

* Component‹object, [ThemeHolder](../index.md#themeholder)›

  ↳ **ThemeProvider**

## Index

### Constructors

* [constructor](themeprovider.md#constructor)

### Properties

* [context](themeprovider.md#context)
* [props](themeprovider.md#readonly-props)
* [refs](themeprovider.md#refs)
* [state](themeprovider.md#state)
* [contextType](themeprovider.md#static-optional-contexttype)

### Methods

* [UNSAFE_componentWillMount](themeprovider.md#optional-unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](themeprovider.md#optional-unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](themeprovider.md#optional-unsafe_componentwillupdate)
* [componentDidCatch](themeprovider.md#optional-componentdidcatch)
* [componentDidMount](themeprovider.md#optional-componentdidmount)
* [componentDidUpdate](themeprovider.md#optional-componentdidupdate)
* [componentWillMount](themeprovider.md#optional-componentwillmount)
* [componentWillReceiveProps](themeprovider.md#optional-componentwillreceiveprops)
* [componentWillUnmount](themeprovider.md#optional-componentwillunmount)
* [componentWillUpdate](themeprovider.md#optional-componentwillupdate)
* [forceUpdate](themeprovider.md#forceupdate)
* [getSnapshotBeforeUpdate](themeprovider.md#optional-getsnapshotbeforeupdate)
* [render](themeprovider.md#render)
* [setState](themeprovider.md#setstate)
* [shouldComponentUpdate](themeprovider.md#optional-shouldcomponentupdate)

## Constructors

###  constructor

\+ **new ThemeProvider**(`props`: [ThemeTreeTypeHolder](../index.md#themetreetypeholder)): *[ThemeProvider](themeprovider.md)*

*Overrides [App](app.md).[constructor](app.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [ThemeTreeTypeHolder](../index.md#themetreetypeholder) |

**Returns:** *[ThemeProvider](themeprovider.md)*

## Properties

###  context

• **context**: *any*

*Inherited from [App](app.md).[context](app.md#context)*

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`see`** https://reactjs.org/docs/context.html

___

### `Readonly` props

• **props**: *Readonly‹object› & Readonly‹object›*

*Inherited from [App](app.md).[props](app.md#readonly-props)*

___

###  refs

• **refs**: *object*

*Inherited from [App](app.md).[refs](app.md#refs)*

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

* \[ **key**: *string*\]: ReactInstance

___

###  state

• **state**: *Readonly‹[ThemeHolder](../index.md#themeholder)›*

*Inherited from [App](app.md).[state](app.md#state)*

___

### `Static` `Optional` contextType

▪ **contextType**? : *Context‹any›*

*Inherited from [App](app.md).[contextType](app.md#static-optional-contexttype)*

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

## Methods

### `Optional` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): *void*

*Inherited from [App](app.md).[UNSAFE_componentWillMount](app.md#optional-unsafe_componentwillmount)*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillReceiveProps

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly‹object›, `nextContext`: any): *void*

*Inherited from [App](app.md).[UNSAFE_componentWillReceiveProps](app.md#optional-unsafe_componentwillreceiveprops)*

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹object› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹object›, `nextState`: Readonly‹[ThemeHolder](../index.md#themeholder)›, `nextContext`: any): *void*

*Inherited from [App](app.md).[UNSAFE_componentWillUpdate](app.md#optional-unsafe_componentwillupdate)*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹object› |
`nextState` | Readonly‹[ThemeHolder](../index.md#themeholder)› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentDidCatch

▸ **componentDidCatch**(`error`: [Error](themeerror.md#static-error), `errorInfo`: ErrorInfo): *void*

*Inherited from [App](app.md).[componentDidCatch](app.md#optional-componentdidcatch)*

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](themeerror.md#static-error) |
`errorInfo` | ErrorInfo |

**Returns:** *void*

___

### `Optional` componentDidMount

▸ **componentDidMount**(): *void*

*Inherited from [App](app.md).[componentDidMount](app.md#optional-componentdidmount)*

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹object›, `prevState`: Readonly‹[ThemeHolder](../index.md#themeholder)›, `snapshot?`: SS): *void*

*Inherited from [App](app.md).[componentDidUpdate](app.md#optional-componentdidupdate)*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹object› |
`prevState` | Readonly‹[ThemeHolder](../index.md#themeholder)› |
`snapshot?` | SS |

**Returns:** *void*

___

### `Optional` componentWillMount

▸ **componentWillMount**(): *void*

*Inherited from [App](app.md).[componentWillMount](app.md#optional-componentwillmount)*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` componentWillReceiveProps

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹object›, `nextContext`: any): *void*

*Inherited from [App](app.md).[componentWillReceiveProps](app.md#optional-componentwillreceiveprops)*

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹object› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Inherited from [App](app.md).[componentWillUnmount](app.md#optional-componentwillunmount)*

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹object›, `nextState`: Readonly‹[ThemeHolder](../index.md#themeholder)›, `nextContext`: any): *void*

*Inherited from [App](app.md).[componentWillUpdate](app.md#optional-componentwillupdate)*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹object› |
`nextState` | Readonly‹[ThemeHolder](../index.md#themeholder)› |
`nextContext` | any |

**Returns:** *void*

___

###  forceUpdate

▸ **forceUpdate**(`callback?`: undefined | function): *void*

*Inherited from [App](app.md).[forceUpdate](app.md#forceupdate)*

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹object›, `prevState`: Readonly‹[ThemeHolder](../index.md#themeholder)›): *SS | null*

*Inherited from [App](app.md).[getSnapshotBeforeUpdate](app.md#optional-getsnapshotbeforeupdate)*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹object› |
`prevState` | Readonly‹[ThemeHolder](../index.md#themeholder)› |

**Returns:** *SS | null*

___

###  render

▸ **render**(): *Element‹›*

*Overrides void*

**Returns:** *Element‹›*

___

###  setState

▸ **setState**‹**K**›(`state`: function | null | S | Pick‹S, K›, `callback?`: undefined | function): *void*

*Inherited from [App](app.md).[setState](app.md#setstate)*

**Type parameters:**

▪ **K**: *keyof ThemeHolder*

**Parameters:**

Name | Type |
------ | ------ |
`state` | function &#124; null &#124; S &#124; Pick‹S, K› |
`callback?` | undefined &#124; function |

**Returns:** *void*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹object›, `nextState`: Readonly‹[ThemeHolder](../index.md#themeholder)›, `nextContext`: any): *boolean*

*Inherited from [App](app.md).[shouldComponentUpdate](app.md#optional-shouldcomponentupdate)*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹object› |
`nextState` | Readonly‹[ThemeHolder](../index.md#themeholder)› |
`nextContext` | any |

**Returns:** *boolean*
