# alps-react

> [WIP] A React implementation of [ALPS](http://alps.adventist.io)

## Requirements

* [Node](https://nodejs.org)
* [yarn](https://yarnpkg.com)

## Install Dependencies

```bash
yarn
```

## Usage

* **Development**: Will run a local development server in `http://localhost:3000`

  ```bash
  yarn start
  ```

* **Run Storybook**: Will run a local storybook server with hot reload in `http://localhost:9009`

  ```bash
  yarn run storybook
  ```

* **Build Storybook**: will bundle the storybook as static assets in `/storybook-static`

  ```bash
  yarn run build-storybook
  ```

## Differences with ALPS

* `molecules/images/LogoLink` was extracted from `organisms/global/header` as a
  separate component.
* `molecules/media/Figure` added.
* removed `role="navigation"` from `<nav>` elements: The element nav has an
  implicit role of navigation. Defining this explicitly is redundant and should
  be avoided (`jsx-a11y/no-redundant-roles`).
* `molecules/components/ShareTools` doesn't include AddThis code.
* `atoms/icons/Doc` and `atoms/icons/Pdf` now use the simplified
  `atoms/icons/File`.
* `atoms/media/Video` accepts `src`, `width` and `height` as props

## Copyright

&copy; 2017 General Conference of the Sevent-day Adventist Church

# Notes

This project was bootstrapped with
[Create React App](https://github.com/facebookincubator/create-react-app).
