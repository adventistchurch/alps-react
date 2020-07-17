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
import {
  AlpsContextProvider,
  Body,
  Button,
  Blockquote,
  Div,
  MediaBlock,
} from 'alps-react'

function MyApp(props) {
  return (
    // The AlpsContextProvider and Body components are required as parents other ALPS-React components (normally in your App root)
    <AlpsContextProvider>
      <Body primaryColor="bluejay" hasGrid>
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
                default: '//picsum.photos/480/270?image=248',
                '500': '//picsum.photos/720/405?image=248',
                '900': '//picsum.photos/960/540?image=248',
              },
              alt: 'Placeholder image',
            }}
            reversed={true}
            cta="Read more"
            url="#/link/to/article"
          />

          <Blockquote text="Asperiores quisquam perferendis dolor in amet." />
        </Div>
      </Body>
    </AlpsContextProvider>
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
  href="//cdn.adventist.org/alps/3/3.6.3/css/main-bluejay.css"
  media="all"
/>
```

_Note_: Replace `bluejay` with the ALPS theme color you are planing to use (check `primaryColors` array in `src/atoms/global/colors.js` for all available options)

If you need to add this programatically, the `externalAssets` variable is exposed by `alps-react`:

```jsx
import { Helmet } from "react-helmet"

import { getExternalAssets, AlpsContextProvider, Body } from 'alps-react'

const externalAssets = getExternalAssets({ version: '3.6.3', theme: 'bluejay' })

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

        <AlpsContextProvider>
          <Body primaryColor="bluejay" hasGrid>
            {/* ALPS-React components go here */}
          </Body>
        </AlpsContextProvider>
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

## Development with Docker

If you want to develop the project using Docker, follow the below instructions.

### Requirements

- Docker

  - [Docker for Mac](https://store.docker.com/editions/community/docker-ce-desktop-mac)
  - [Docker for Windows](https://store.docker.com/editions/community/docker-ce-desktop-windows)
  - **Docker for Linux**: Please see your distributions package management system

- docker-compose
  - docker-compose **is included with Docker** on default installation for both **Mac OS** and **Windows** version
  - docker-compose for linux: Please see your distributions package management system

#### Advice about docker-compose

We are using Node through Docker. In order to use tools like Yarn through Docker, we must pass our commands to the Docker container. This is a really long command:

`docker-compose -f docker-compose.cli.yml run --rm <command>`

Because of this, it is recommended to create an alias for `docker-compose -f docker-compose.cli.yml run --rm` and call it `dcli` (Docker CLI).

### Install Dependencies

```bash
dcli yarn install
```

### Load Storybook

- **Run Storybook**: Will run a local storybook server with hot reload in `http://localhost:9009`

  ```bash
  dcli --service-ports yarn storybook
  ```

- **Build Storybook**: will bundle the storybook as static assets in `/storybook-static`

  ```bash
  dcli yarn build-storybook
  ```

### Build for production

To build a production version, run:

```bash
dcli yarn build
```

## Copyright

&copy; 2019 General Conference of the Seventh-day Adventist Church [https://adventist.org](https://adventist.org) | [https://adventist.io](https://adventist.io)

Developed by [Stimme der Hoffnung e.V](https://stimme-der-hoffnung.de) in Germany
