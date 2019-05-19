# alps-react

> [WIP] A React implementation of [ALPS](http://alps.adventist.io/v3)

[![ALPS-React Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://alps-react.adventist.io/)


Translations:

- [🇧🇷 Português do Brasil](https://github.com/adventistchurch/alps-react/blob/master/README-pt-br.md)

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
import { Wrapper, Button, Blockquote, Div, MediaBlock } from 'alps-react'

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

### Add Assets: ALPS Styles and fonts

You should also include in your HTML `<head>` ALPS stylesheets and fonts from their official CDN:

```html
<!-- FONT -->
<link
  rel="stylesheet"
  type="text/css"
  href="//fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i|Noto+Serif:400,400i,700,700i"
  media="all"
/>

<!-- ALPS CSS -->
<link
  rel="stylesheet"
  type="text/css"
  href="//cdn.adventist.org/alps/3/latest/css/main.css"
  media="all"
/>
```

If you need to add this programatically, the `externalAssets` variable is exposed by `alps-react`:

```jsx
import { Helmet } from "react-helmet"

import { externalAssets, Wrapper } from 'alps-react'

function MyApp () {
    return (
      <React.Fragment>
        <Helmet>
          <title>My App</title>
          <link rel="canonical" href="http://myapp.com" />

          {externalAssets.css.map(href => (
            <link rel="stylesheet" type="text/css" href={href} media="all" />
          ))}
        </Helmet>

        <Wrapper hasGrid={true} primaryColor="bluejay">
          {/* ALPS-React components go here */}
        </Wrapper>
      </React.Fragment>
    )
  }
}
```

After adding the assets you should see something like this:

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
