import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import Icon from './Icon'

storiesOf('Icon', module)
  .add('Share "blue"', () => <Icon name="share" color="blue" />)
  .add('Share "gray"', () => <Icon name="share" color="gray" />)
  .add('Share "light-brown"', () => <Icon name="share" color="light-brown" />)
  .add('Share "white"', () => (
    <div style={{ backgroundColor: 'gray' }}>
      <Icon name="share" color="white" />
    </div>
  ))
  .add('World "xs" size ', () => <Icon name="world" size="xs" />)
  .add('World "s" size ', () => <Icon name="world" size="s" />)
  .add('World "m" size ', () => <Icon name="world" size="m" />)
  .add('World "l" size ', () => <Icon name="world" size="l" />)
  .add('World "xl" size ', () => <Icon name="world" size="xl" />)
  .add('World "xl blue" ', () => <Icon name="world" size="xl" color="blue" />)
