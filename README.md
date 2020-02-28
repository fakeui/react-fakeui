# @fakeui/react

> Display skeleton preview of the content to improve use experience while data is being loading.

[![NPM](https://img.shields.io/npm/v/@fakeui/react.svg)](https://www.npmjs.com/package/@fakeui/react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @fakeui/react
```

## Usage

```jsx
import React, { Component } from 'react';

import MyComponent from '@fakeui/react';

class Example extends Component {
    render() {
        return <MyComponent />;
    }
}
```

To fix the Invalid hook call Error.

1. In Your Application:

    a) cd node_modules/react && npm link

    b) cd node_modules/react-dom && npm link

2. In Your Library

    a) npm link react

    b) npm link react-dom

3. Stop your dev-server and do `npm start` again.

## License

MIT © [](https://github.com/)
