import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import Accordion from './Accordion'
import ContentBlock from '../blocks/ContentBlock'
import MediaBlock from '../blocks/MediaBlock'

const defaults = {
  _image: {
    default: '//picsum.photos/500/375?image=1071',
    500: '//picsum.photos/900/700',
    750: '//picsum.photos/700/600',
    1200: '//picsum.photos/500/375',
    imageAlt: 'Random image',
    imageCaption: 'Curabitur vulputate mattis dignissim.',
  },
  items: [
    {
      heading: 'Media block without image',
      content: (
        <MediaBlock
          description="Fusce interdum purus est, vel semper ex tristique ut. Proin dapibus luctus pellentesque. Duis et sapien sit amet enim porttitor gravida at non orci. Proin dictum lobortis luctus. Sed sagittis massa id blandit aliquet. Pellentesque semper tincidunt ex sit amet tincidunt. Cras at sem at felis rhoncus varius eget vel ipsum."
          url="https://www.adventist.org"
          cta="Find our more"
        />
      ),
    },
    {
      heading: 'Media block with image',
      content: (
        <MediaBlock
          title="Media Block with image"
          description="Fusce interdum purus est, vel semper ex tristique ut. Proin dapibus luctus pellentesque. Duis et sapien sit amet enim porttitor gravida at non orci. Proin dictum lobortis luctus. Sed sagittis massa id blandit aliquet. Pellentesque semper tincidunt ex sit amet tincidunt. Cras at sem at felis rhoncus varius eget vel ipsum."
          imageSrcSet={{
            default: '//picsum.photos/500/282',
            500: '//picsum.photos/900/507',
            750: '//picsum.photos/700/395',
            1200: '//picsum.photos/500/282',
          }}
        />
      ),
    },
    {
      heading: 'Content block',
      content: (
        <ContentBlock
          title="Content Block"
          description="Fusce interdum purus est, vel semper ex tristique ut. Proin dapibus luctus pellentesque. Duis et sapien sit amet enim porttitor gravida at non orci. Proin dictum lobortis luctus. Sed sagittis massa id blandit aliquet. Pellentesque semper tincidunt ex sit amet tincidunt. Cras at sem at felis rhoncus varius eget vel ipsum."
        />
      ),
    },
    {
      heading: 'Plain HTML',
      content: (
        <p>
          Fusce interdum purus est, vel semper ex tristique ut. Proin dapibus
          luctus pellentesque. Duis et sapien sit amet enim porttitor gravida at
          non orci. Proin dictum lobortis luctus. Sed sagittis massa id blandit
          aliquet. Pellentesque semper tincidunt ex sit amet tincidunt. Cras at
          sem at felis rhoncus varius eget vel ipsum.
        </p>
      ),
    },
  ],
}

storiesOf('molecules/components/Accordion', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    return <Accordion items={defaults.items} />
  })
