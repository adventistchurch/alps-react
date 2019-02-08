import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import ExtendedQuote from './ExtendedQuote'

const defaults = {
  content: (
    <>
      <p>
        <em>Reading time: 3 minutes</em>
        <br />
      </p>
      <h3>This pattern is for display purposes only</h3>
      <p>
        The <code>.quote--extended</code> class should be used directly within a
        parent element with the <code>.text</code> class. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. In egestas, lectus at varius
        bibendum, sapien libero tincidunt magna, eu posuere ante odio at nulla.
        Nullam mi magna, feugiat aliquet felis eu, tempus egestas sem. Aliquam
        at nulla varius, vehicula nunc ac, egestas ligula. Pellentesque gravida
        augue massa, eget suscipit tellus dignissim sit amet. Donec tincidunt
        imperdiet tellus, vel fermentum justo egestas at. Mauris cursus justo in
        nisl ultricies gravida. Pellentesque condimentum pulvinar urna, sit amet
        mattis turpis sagittis vel. Fusce sollicitudin viverra mi et finibus.
        Nullam eleifend magna ut condimentum rhoncus. Curabitur eget nisi quam.
      </p>
      <p>
        Nam ut ultricies mi. Etiam eros urna, tempor at interdum ut, mattis vel
        metus. Aliquam bibendum nulla a leo elementum, ultricies accumsan nisl
        pharetra. Sed efficitur urna a odio egestas blandit. Integer venenatis,
        est ac sodales varius, ipsum tellus tincidunt mi, sit amet feugiat leo
        tortor sed arcu. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Fusce pharetra faucibus euismod.
        Donec efficitur, leo et viverra laoreet, lectus purus faucibus diam, non
        fringilla magna ligula eu velit. Vivamus suscipit lacus nec metus
        vestibulum condimentum. Cras venenatis, dui maximus tincidunt dapibus,
        lacus lorem accumsan metus, in facilisis ligula ligula id nisi. Praesent
        in ligula volutpat, pellentesque magna vitae, auctor purus. Praesent
        placerat lacinia ligula.
      </p>
    </>
  ),
}

storiesOf('molecules/text/ExtendedQuote', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    return <ExtendedQuote>{defaults.content}</ExtendedQuote>
  })
