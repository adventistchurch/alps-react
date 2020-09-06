import React from 'react'

import BlockImage from './BlockImage'

export const exampleImages = {
  landscape: {
    alt: 'Eligendi quod dolorem',
    srcSet: {
      default: 'https://picsum.photos/480/360/',
      500: 'https://picsum.photos/720/540/',
      900: 'https://picsum.photos/960/720/',
    },
  },
  portrait: {
    alt: 'Eligendi quod dolorem',
    srcSet: {
      default: 'https://picsum.photos/360/480/',
      500: 'https://picsum.photos/540/720/',
      900: 'https://picsum.photos/720/960/',
    },
  },
  square: {
    alt: 'Eligendi quod dolorem',
    srcSet: {
      default: 'https://picsum.photos/360/360/',
      500: 'https://picsum.photos/540/540/',
      900: 'https://picsum.photos/720/720/',
    },
  },
}

export default {
  title: 'ALPS/Molecules/Blocks/BlockImage',
  component: BlockImage,
  excludeStories: ['exampleImages'],
  argTypes: {
    image: {
      control: {
        type: 'inline-radio',
        options: exampleImages,
      },
    },
  },
}

const BlockImageTemplate = props => <BlockImage {...props} />

export const Default = BlockImageTemplate.bind({})
Default.args = {
  image: exampleImages.landscape,
}

export const Landscape = BlockImageTemplate.bind({})
Landscape.args = {
  ...Default.args,
  image: exampleImages.landscape,
}

export const Portrait = BlockImageTemplate.bind({})
Portrait.args = {
  ...Default.args,
  image: exampleImages.portrait,
}

export const Square = BlockImageTemplate.bind({})
Square.args = {
  ...Default.args,
  image: exampleImages.square,
}

export const WithBackgroundImage = BlockImageTemplate.bind({})
WithBackgroundImage.args = {
  ...Default.args,
  asBackgroundImage: true,
}

export const WithCaption = BlockImageTemplate.bind({})
WithCaption.args = {
  ...Default.args,
  caption: 'Lorem ipsum dolor sit amet.',
}

export const WithIcon = BlockImageTemplate.bind({})
WithIcon.args = {
  ...Default.args,
  icon: 'gallery',
}

export const WithIconAndCaption = BlockImageTemplate.bind({})
WithIconAndCaption.args = {
  ...WithIcon.args,
  ...WithCaption.args,
}
