# alps-react

> [WIP] A React implementation of [ALPS](http://alps.adventist.io/v3)

[![ALPS-React Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://alps-react.adventist.io/)

For more info and reference, check ALPS Documentation:

- [Alps Pattern Lab](https://alps.adventist.io/v3/)
- [Alps-React Storybook](https://alps-react.adventist.io/)

## Usage

Add `alps-react` as a dependency:

- Using `yarn`

  ```bash
  yarn add alps-react
  ```

- Using `npm`

  ```bash
  npm intall alps-react
  ```

Then import and use its components in your code:

```jsx
import { Wrapper, Button, Blockquote } from 'alps-react'

function MyApp(props) {
  return (
    // The Wrapper component is required as parent other ALPS-React components (normally in your App root)
    <Wrapper hasGrid={true} primaryColor="bluejay">
      <Div spacingSize="double" padding>
        <Button text="Welcome to ALPS-React" />

        <MediaBlock
          type="inline"
          title="Sunt id vel ipsum at ut praesentium aut."
          description="Repellat libero qui magni at ut sapiente facere nam veritatis."
          kicker="Cumque omnis velit."
          category="Church"
          date={new Date()}
          image={{
            srcSet: {
              default: '//picsum.photos/500/375?image=248',
              '500': '//picsum.photos/700/600?image=248',
              '900': '//picsum.photos/900/700?image=248',
            },
            alt: 'Placeholder image',
          }}
          reversed={true}
          cta="Read more"
          url="#/link/to/article"
        />

        <Blockquote text="Asperiores quisquam perferendis dolor in amet." />
      </Div>
    </Wrapper>
  )
}
```

> _NOTE_: This is just a simple example on how the API loooks. Event when you can use the components as you will, the recomended way is to use some of the Templates components and provide them with configurations and data/subcomponents.

You should expect something like this:

![Example output](public/example-output.png?raw=true)

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

### Build for production

To build a production version, run:

```bash
yarn build
```

> This library is built using [Rollup.js](https://rollupjs.org)

## Copyright

&copy; 2019 General Conference of the Seventh-day Adventist Church [https://adventist.org](https://adventist.org) | [https://adventist.io](https://adventist.io)

Developed by [Stimme der Hoffnung e.V](https://stimme-der-hoffnung.de) in Germany
