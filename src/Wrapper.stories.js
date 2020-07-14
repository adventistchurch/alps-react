import React from 'react'
import PropTypes from 'prop-types'

import { storiesOf } from '@storybook/react'

import Wrapper from './Wrapper'
import { wrapperTab } from './Wrapper.tabs.js'
import Button from './atoms/buttons/Button'
import Blockquote from './atoms/texts/Blockquote'
import MediaBlock from './molecules/blocks/MediaBlock'
import { Div, Link } from './helpers/Element'

function CustomLinkWrapper({ children, href }) {
  return <span data-link={href}>{children}</span>
}
CustomLinkWrapper.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
}

storiesOf('helpers/Wrapper', module)
  .addWithJSX('Default', () => {
    const props = wrapperTab()
    return (
      <Wrapper {...props}>
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
      </Wrapper>
    )
  })

  .addWithJSX('With LinkWrapper', () => {
    const props = wrapperTab()
    return (
      <Wrapper {...props} LinkWrapper={CustomLinkWrapper}>
        <Div spacingSize="double" padding>
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
      </Wrapper>
    )
  })
