import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs'

import BasicPage from './BasicPage'

const propsTab = 'Props'
const sidebarTab = 'Sidebar'
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
    cta: 'Vestibulum non lectus',
    url: 'https://www.adventist.org',
    blockClass: 'can-be--dark-dark',
  },
  aside: {
    primaryBlocks: {
      heading: 'News',
      linkText: 'See All',
      url: '/news/all',
      blocks: [
        {
          title: 'Nulla finibus ligula ut nisl facilisis',
          description:
            'Curabitur non est vulputate, euismod nibh non, sollicitudin nisi. Morbi ullamcorper purus et massa mattis fermentum.',
          category: 'Culture',
          datetime: 1550093519415,
          imageSrcSet: {
            '500': '//picsum.photos/900/507?random',
            '750': '//picsum.photos/700/395?random',
            '1200': '//picsum.photos/500/282?random',
            default: '//picsum.photos/500/282?random',
          },
          imageAlt: 'Placeholder image',
          stacked: true,
          border: 'left',
        },
        {
          title: 'Nulla finibus ligula ut nisl facilisis',
          description:
            'Curabitur non est vulputate, euismod nibh non, sollicitudin nisi. Morbi ullamcorper purus et massa mattis fermentum.',
          category: 'Culture',
          datetime: 1550093519415,
          imageSrcSet: {
            '500': '//picsum.photos/900/507?random',
            '750': '//picsum.photos/700/395?random',
            '1200': '//picsum.photos/500/282?random',
            default: '//picsum.photos/500/282?random',
          },
          imageAlt: 'Placeholder image',
          stacked: true,
          border: 'left',
        },
      ],
    },
    secondaryBlocks: {
      heading: 'More News',
      linkText: 'See All',
      url: '/news/all',
      blocks: [
        {
          title: 'Aenean quis velit vel nibh commodo elementum',
          category: 'Culture',
        },
        {
          title: 'Aenean quis velit vel nibh commodo elementum',
          category: 'Culture',
        },
        {
          title: 'Aenean quis velit vel nibh commodo elementum',
          category: 'Culture',
        },
        {
          title: 'Aenean quis velit vel nibh commodo elementum',
          category: 'Culture',
        },
      ],
    },
  },
}

storiesOf('templates/BasicPage', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const title = text('Title', defaults.title, propsTab)
    const kicker = text('Kicker', defaults.kicker, propsTab)
    const background = object('Background', defaults.background, propsTab)
    const breadcrumbs = object('Breadcrumbs', defaults.breadcrumbs, propsTab)
    const content = object('Content', defaults.content, propsTab)
    const showSidebar = boolean('Sidebar', true, sidebarTab)
    const breakout = object('Breakout', defaults.breakout, sidebarTab)
    const aside = object('Aside', defaults.aside, sidebarTab)
    return (
      <div className="l-wrap">
        <div className="l-wrap__content l-content" role="document">
          <BasicPage
            title={title}
            kicker={kicker}
            background={background}
            breadcrumbs={breadcrumbs}
            content={content}
            breakout={showSidebar ? breakout : null}
            aside={showSidebar ? aside : null}
          />
        </div>
      </div>
    )
  })
