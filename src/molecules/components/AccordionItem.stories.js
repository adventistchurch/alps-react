import React from 'react'

import AccordionItem from './AccordionItem'
import MediaBlock from '../blocks/MediaBlock'

export default {
  title: 'ALPS/Molecules/Components/AccordionItem',
  component: AccordionItem,
}

const AccordionItemTemplate = props => <AccordionItem {...props} />

export const Default = AccordionItemTemplate.bind({})
Default.args = {
  heading: 'With Text as content',
  content:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam impedit esse dolores maiores repellat doloremque quae animi sapiente odio voluptate?',
}

export const WithNodeContent = AccordionItemTemplate.bind({})
WithNodeContent.args = {
  heading: 'With Node as content',
  content: (
    <MediaBlock
      title="Media Block with image"
      description="Fusce interdum purus est, vel semper ex tristique ut. Proin dapibus luctus pellentesque. Duis et sapien sit amet enim porttitor gravida at non orci. Proin dictum lobortis luctus. Pellentesque semper tincidunt ex sit amet tincidunt. Cras at sem at felis rhoncus varius eget vel ipsum."
      image={{
        srcSet: {
          default: '//picsum.photos/500/282',
          500: '//picsum.photos/900/507',
          750: '//picsum.photos/700/395',
          1200: '//picsum.photos/500/282',
        },
        alt: 'Voluptas ex minus rerum asperiores sunt.',
      }}
    />
  ),
}

export const WithChildren = AccordionItemTemplate.bind({})
WithChildren.args = {
  heading: 'With children',
  children: (
    <MediaBlock
      title="Media Block with image"
      description="Fusce interdum purus est, vel semper ex tristique ut. Proin dapibus luctus pellentesque. Duis et sapien sit amet enim porttitor gravida at non orci. Proin dictum lobortis luctus. Pellentesque semper tincidunt ex sit amet tincidunt. Cras at sem at felis rhoncus varius eget vel ipsum."
      image={{
        srcSet: {
          default: '//picsum.photos/500/282',
          500: '//picsum.photos/900/507',
          750: '//picsum.photos/700/395',
          1200: '//picsum.photos/500/282',
        },
        alt: 'Voluptas ex minus rerum asperiores sunt.',
      }}
    />
  ),
}

export const IsOpen = AccordionItemTemplate.bind({})
IsOpen.args = {
  ...Default.args,
  heading: 'Item is open/expanded by default',
  open: true,
}

export const WithIcon = AccordionItemTemplate.bind({})
WithIcon.args = {
  ...Default.args,
  heading: 'With Icon',
  icon: 'contact',
}

export const WithOnChange = AccordionItemTemplate.bind({})
WithOnChange.storyName = 'With `onChange`'
WithOnChange.args = {
  ...Default.args,
  heading: 'With onChange',
  onChange: open => console.log('Is open?', open), // eslint-disable-line no-console
}
