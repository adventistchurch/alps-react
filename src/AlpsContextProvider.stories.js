import React from 'react'
import PropTypes from 'prop-types'

import { storiesOf } from '@storybook/react'
import { boolean, select, text } from '@storybook/addon-knobs'

import { primaryColors, secondaryColors } from './atoms/global/colors'
import Button from './atoms/buttons/Button'
import Blockquote from './atoms/texts/Blockquote'
import MediaBlock from './molecules/blocks/MediaBlock'
import { Div, Link } from './helpers/Element'
import AlpsContextProvider from './AlpsContextProvider'
import Body from './Body'

function CustomLinkWrapper({ children, href }) {
  return <span data-link={href}>{children}</span>
}
CustomLinkWrapper.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
}

export function alpsThemeTab(settings = {}) {
  const { secondaryColor, primaryColor, publicAssetsPath, hasGrid, tab } = {
    ...{
      tab: 'Theme',
      primaryColor: 'ming',
      hasGrid: true,
      publicAssetsPath: '/assets',
    },
    ...settings,
  }

  return {
    primaryColor: select('Primary color', primaryColors, primaryColor, tab),
    secondaryColor: select(
      'Secondary color',
      secondaryColors,
      secondaryColor,
      tab
    ),
    hasGrid: boolean('Has Grid', hasGrid, tab),
    publicAssetsPath: text('Path to Public Assets', publicAssetsPath, tab),
  }
}

storiesOf('helpers/AlpsContextProvider', module)
  .addWithJSX('Default', () => {
    const themeProps = alpsThemeTab()
    return (
      <AlpsContextProvider>
        <Body {...themeProps}>
          <Div spacing="double" padding>
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
                  500: '//picsum.photos/720/405?image=248',
                  900: '//picsum.photos/960/540?image=248',
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
  })

  .addWithJSX('With LinkWrapper', () => {
    const themeProps = alpsThemeTab()
    return (
      <AlpsContextProvider LinkWrapper={CustomLinkWrapper}>
        <Body {...themeProps}>
          <Div spacing="double" padding>
            <Div>
              <Button
                as="a"
                text="A Button with link"
                url="http://alps-react.adventist.io"
              />
            </Div>
            <Div>
              <Link href="http://alps.adventist.io/v3" title="Test">
                A simple Link
              </Link>
            </Div>
            <Div>
              <Link href="#link-demo-1">Another Link</Link>
            </Div>
          </Div>
        </Body>
      </AlpsContextProvider>
    )
  })
