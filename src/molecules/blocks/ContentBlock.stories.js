import React from 'react'

import ContentBlock from './ContentBlock'

export default {
  title: 'ALPS/Molecules/Blocks/ContentBlock',
  component: ContentBlock,
}

const ContentBlockTemplate = props => <ContentBlock {...props} />

export const Default = ContentBlockTemplate.bind({})
Default.args = {
  title: 'General Conference',
  description:
    'The General Conference coordinates the global ministry of the Seventh-day Adventist Church and is responsible for the spiritual and developmental plans of the church around the world.',
  cta: 'Find out more',
  url: 'https://www.adventist.org',
}

export const ShowMore = ContentBlockTemplate.bind({})
ShowMore.args = {
  ...Default.args,
  more:
    'Seventh-day Adventist beliefs are meant to permeate your whole life. Growing out of scriptures that paint a compelling portrait of God, you are invited to explore, experience and know the One who desires to make us whole.',
}

export const WithCategory = ContentBlockTemplate.bind({})
WithCategory.args = {
  ...Default.args,
  category: 'Organization',
}
export const WithDateTime = ContentBlockTemplate.bind({})
WithDateTime.args = {
  ...Default.args,
  date: '2020-02-20 20:20:20',
  dateFormat: 'datetime',
  dateStyle: 'long',
  timeStyle: 'short',
}

export const WithImageLandscape = ContentBlockTemplate.bind({})
WithImageLandscape.args = {
  ...Default.args,
  image: {
    srcSet: {
      default: '//picsum.photos/480/270',
      500: '//picsum.photos/960/540',
      750: '//picsum.photos/720/405',
      1200: '//picsum.photos/480/270',
    },
    alt: "image's description",
  },
}

export const WithImagePortrait = ContentBlockTemplate.bind({})
WithImagePortrait.title = 'WithImagePortrait'
WithImagePortrait.args = {
  ...Default.args,
  image: {
    srcSet: {
      default: '//picsum.photos/150/200',
      500: '//picsum.photos/300/400',
      750: '//picsum.photos/450/600',
      1200: '//picsum.photos/600/800',
    },
    alt: "image's description",
  },
}
export const WithImageSquare = ContentBlockTemplate.bind({})
WithImageSquare.args = {
  ...Default.args,
  image: {
    srcSet: {
      default: '//picsum.photos/100/100',
      500: '//picsum.photos/200/200',
      750: '//picsum.photos/300/300',
      1200: '//picsum.photos/500/500',
    },
    alt: "image's description",
  },
}
