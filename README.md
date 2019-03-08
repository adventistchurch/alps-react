# alps-react

> [WIP] A React implementation of [ALPS](http://alps.adventist.io/v3)

See [Project's Storybook](https://alps-react.adventist.io/)

## Usage

- Add it as a dependency

  ```bash
  yarn add alps-react
  ```

  or

  ```bash
  npm intall alps-react
  ```

- Use it in your code:

```js
// Example:
import { Button } from 'alps-react'

function MyComponent(props) {
  return (<Button label="Hello!">)
}
```

- For reference use:
  - : [Alps Pattern Lab](https://alps.adventist.io/v3/)
  - : [Alps-React Storybook](https://alps-react.adventist.io/)

## Development

### Requirements

- [Node](https://nodejs.org)
- [yarn](https://yarnpkg.com/en/docs/install)

### Install Dependencies

```bash
yarn
```

### Load Storybook

- **Run Storybook**: Will run a local storybook server with hot reload in `http://localhost:9009`

  ```bash
  yarn storybook
  ```

- **Build Storybook**: will bundle the storybook as static assets in `/storybook-static`

  ```bash
  yarn build-storybook
  ```

## Copyright

&copy; 2019 General Conference of the Seventh-day Adventist church
