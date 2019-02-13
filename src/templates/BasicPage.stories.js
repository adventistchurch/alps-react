import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import BreakoutBlock from '../molecules/blocks/BreakoutBlock'

import BasicPage from './BasicPage'

const defaults = {
  title: 'Basic Page',
  kicker: 'Kicker',
  background: {
    small: '//placeimg.com/600/300/nature',
    medium: '//placeimg.com/900/400/nature',
    large: '//placeimg.com/1400/500/nature',
  },
  breadcrumbs: [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Vitality',
      url: '/vitality',
    },
    {
      text: 'Photos',
    },
  ],
  content: (
    <>
      <h2>Header Two</h2>
      <p>
        Praesent pulvinar condimentum sagittis. <a href="">Maecenas</a> laoreet
        neque non eros consectetur fringilla. Donec vitae risus leo, vitae
        pharetra ipsum. Sed placerat eros eget elit iaculis semper. Aliquam
        congue blandit orci ac pretium. In hac habitasse platea dictumst.
        Maecenas vitae turpis pretium, accumsan neque non, pretium dui.
        Phasellus volutpat tortor vitae lacinia elementum. Fusce fringilla
        lectus vel risus feugiat semper. Fusce ullamcorper condimentum
        condimentum proin eget vehicula lorem, at lacinia arcu. Aenean vulputate
        vitae lorem ac tempor. <strong>Etiam semper</strong> eros vitae
        vestibulum ultricies.
      </p>
    </>
  ),
  breakout: {
    title: 'Nulla facilisi',
    description:
      'Fusce porta sed odio eu dignissim. Vivamus imperdiet libero mattis orci aliquam imperdiet. Vivamus sit amet tortor nec magna tincidunt faucibus sit amet ac sem. Maecenas mattis nibh at urna feugiat posuere. Pellentesque blandit condimentum eros, fermentum ornare diam facilisis eget.',
    ctaText: 'Vestibulum non lectus',
    ctaUrl: '#',
    blockClass: 'can-be--dark-dark',
  },
  // aside: {
  //   content: [],
  //   contentBlocks: [],
  // },
  aside: (
    <>
      <h1>Aside</h1>
      <p>Text</p>
    </>
  ),
}

storiesOf('templates/BasicPage', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const title = text('title', defaults.title)
    const kicker = text('kicker', defaults.kicker)
    const background = text('background', defaults.background)
    const breadcrumbs = text('breadcrumbs', defaults.breadcrumbs)
    const content = text('content', defaults.content)
    const breakout = text('breakout', defaults.breakout)
    const aside = text('aside', defaults.aside)
    return (
      <div className="l-wrap">
        <div className="l-wrap__content l-content" role="document">
          <BasicPage
            title={title}
            kicker={kicker}
            background={background}
            breadcrumbs={breadcrumbs}
            content={content}
            breakout={breakout}
            aside={aside}
          />
        </div>
      </div>
    )
  })
