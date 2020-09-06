import React from 'react'

import { iconNames } from '../../atoms/icons/Icon'
import DateTimeStories from '../../helpers/DateTime.stories'

import MediaBlock, { mediaBlocksTypes } from './MediaBlock'
import { exampleImages } from './BlockImage.stories'

export default {
  title: 'ALPS/Molecules/Blocks/MediaBlock',
  component: MediaBlock,
  argTypes: {
    type: { control: { type: 'select', options: mediaBlocksTypes } },
    titlePrefix: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    titleAs: { control: { type: 'select' } },
    description: { control: { type: 'text' } },
    kicker: { control: { type: 'text' } },
    kickerAs: { control: { type: 'select' } },
    category: { control: { type: 'text' } },
    date: { control: { type: 'date' } },
    dateMode: DateTimeStories.argTypes.mode,
    dateFormat: DateTimeStories.argTypes.dateFormat,
    timeFormat: DateTimeStories.argTypes.timeFormat,
    dateLocales: DateTimeStories.argTypes.locale,
    cta: { control: { type: 'text' } },
    ctaIcon: { control: { type: 'select', options: iconNames } },
    url: { control: { type: 'text' } },
    image: { control: { type: 'select', options: exampleImages } },
    imageCaption: { control: { type: 'text' } },
    asBackgroundImage: { control: { type: 'boolean' } },
  },
}

const MediaBlockTemplate = props => <MediaBlock {...props} />

export const Default = MediaBlockTemplate.bind({})
Default.args = {
  title:
    'Adventist leaders call for international cooperation to end abuse of refugees in Libya',
  description:
    'Mauris sit amet augue gravida, dignissim sem maximus, aliquam metus. Maecenas eu consectetur orci, id auctor dui.',
  url: 'https://www.adventist.org',
  image: exampleImages.landscape,
}

export const WithImageCaption = MediaBlockTemplate.bind({})
WithImageCaption.args = {
  ...Default.args,
  imageCaption: '@2020 Photographer Name',
}

export const WithImageMediaIcon = MediaBlockTemplate.bind({})
WithImageMediaIcon.args = {
  ...Default.args,
  mediaIcon: 'gallery',
}

export const WithImagePortrait = MediaBlockTemplate.bind({})
WithImagePortrait.args = {
  ...Default.args,
  image: exampleImages.portrait,
}

export const WithImageSquare = MediaBlockTemplate.bind({})
WithImageSquare.args = {
  ...Default.args,
  image: exampleImages.square,
}

export const WithKicker = MediaBlockTemplate.bind({})
WithKicker.args = {
  ...Default.args,
  kicker: 'Eligendi quod dolorem',
}

export const WithTitlePrefix = MediaBlockTemplate.bind({})
WithTitlePrefix.args = {
  ...Default.args,
  titlePrefix: 'Breaking',
}

export const WithCategory = MediaBlockTemplate.bind({})
WithCategory.args = {
  ...Default.args,
  category: 'Culture',
}

export const WithDateTime = MediaBlockTemplate.bind({})
WithDateTime.args = {
  ...Default.args,
  date: '2019-02-09 12:34:56',
}

export const WithCTA = MediaBlockTemplate.bind({})
WithCTA.args = {
  ...Default.args,
  cta: 'Find out more',
  ctaIcon: 'arrow-long-right',
}

export const Inline = MediaBlockTemplate.bind({})
Inline.args = {
  ...Default.args,
  type: 'inline',
}

export const Feature = MediaBlockTemplate.bind({})
Feature.args = {
  ...Default.args,
  type: 'feature',
}

export const Inset = MediaBlockTemplate.bind({})
Inset.args = {
  ...Default.args,
  type: 'inset',
}

export const Stacked = MediaBlockTemplate.bind({})
Stacked.args = {
  ...Default.args,
  type: 'stacked',
}

export const Row = MediaBlockTemplate.bind({})
Row.args = {
  ...Default.args,
  type: 'row',
}
