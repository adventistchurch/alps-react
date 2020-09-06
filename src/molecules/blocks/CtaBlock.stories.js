import React from 'react'

import CtaBlock from './CtaBlock'

export default {
  title: 'ALPS/Molecules/Blocks/CtaBlock',
  component: CtaBlock,
  // argTypes: {
  //   title: { control: { type: 'text' } },
  //   description: { control: { type: 'text' } },
  //   picture: { control: { type: 'object' } },
  //   asBackgroundImage: { control: { type: 'boolean' } },
  // },
}

const CtaBlockTemplate = props => <CtaBlock {...props} />

export const Default = CtaBlockTemplate.bind({})
Default.args = {
  title:
    'Adventist leaders call for international cooperation to end abuse of refugees in Libya',
  description:
    'Mauris sit amet augue gravida, dignissim sem maximus, aliquam metus. Maecenas eu consectetur orci, id auctor dui.',
  buttons: [
    {
      label: 'Read more',
      url: '#read-more',
    },
  ],
}

export const WithMultipleButtons = CtaBlockTemplate.bind({})
WithMultipleButtons.args = {
  ...Default.args,
  buttons: [
    {
      label: 'Read more',
      url: '#read-more',
      icon: 'arrow-long-right',
    },
    {
      label: 'Download',
      url: '#download',
      icon: 'arrow-long-right',
      iconPosition: 'right',
      outline: true,
    },
    {
      label: 'Link',
      url: '#link',
      simple: true,
    },
  ],
}

export const WithPicture = CtaBlockTemplate.bind({})
WithPicture.args = {
  ...Default.args,
  picture: {
    srcSet: {
      default: '//picsum.photos/480/270',
      500: '//picsum.photos/960/540',
      750: '//picsum.photos/720/405',
      1200: '//picsum.photos/480/270',
    },
  },
}

export const WithBackgroundPicture = CtaBlockTemplate.bind({})
WithBackgroundPicture.args = {
  ...WithPicture.args,
  asBackgroundImage: true,
}
