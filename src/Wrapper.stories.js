import React from 'react'
import { storiesOf } from '@storybook/react'
import {} from '@storybook/addon-knobs'

import Wrapper from './Wrapper'
import Button from './atoms/buttons/Button'
import Blockquote from './atoms/texts/Blockquote'
import MediaBlock from './molecules/blocks/MediaBlock'
import { Div, Paragraph, Link } from './helpers/Element'

storiesOf('helpers/Wrapper', module)
  .addWithJSX('Default', () => {
    return (
      <Wrapper hasGrid primaryColor="ming">
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
  })

  .addWithJSX('With LinkWrapper', () => {
    return (
      <Wrapper
        hasGrid
        primaryColor="ming"
        LinkWrapper={({ children, href }) => (
          <span data-link={href}>{children}</span>
        )}
      >
        <Div spacingSize="double" padding>
          <Div>
            <Button
              as="a"
              text="A Button with link"
              url="http://alps-react.adventist.io"
            />
          </Div>
          <Div>
            <Link href="#link-demo-1" title="Test">
              A simple Link
            </Link>
          </Div>
          <Div>
            <Link href="#link-demo-2">Another Link</Link>
          </Div>
        </Div>
      </Wrapper>
    )
  })
