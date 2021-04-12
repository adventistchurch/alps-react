import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import Icon, { iconNames } from './Icon'

const propsTab = 'Props'

storiesOf('atoms/icons/Icon', module)
  .addWithJSX('Default', () => {
    const name = select('Name *', iconNames, 'logo', propsTab)
    return <Icon name={name} />
  })

  .addWithJSX('arrow-bracket-left', () => <Icon name="arrow-bracket-left" />)
  .addWithJSX('arrow-bracket-right', () => <Icon name="arrow-bracket-right" />)
  .addWithJSX('arrow-long-left', () => <Icon name="arrow-long-left" />)
  .addWithJSX('arrow-long-right', () => <Icon name="arrow-long-right" />)
  .addWithJSX('arrow-short-left', () => <Icon name="arrow-short-left" />)
  .addWithJSX('arrow-short-right', () => <Icon name="arrow-short-right" />)
  .addWithJSX('close', () => <Icon name="close" />)
  .addWithJSX('close-thin', () => <Icon name="close-thin" />)
  .addWithJSX('contact', () => <Icon name="contact" />)
  .addWithJSX('dots', () => <Icon name="dots" />)
  .addWithJSX('find', () => <Icon name="find" />)
  .addWithJSX('heart', () => <Icon name="heart" />)
  .addWithJSX('language', () => <Icon name="language" />)
  .addWithJSX('legal', () => <Icon name="legal" />)
  .addWithJSX('logo', () => <Icon name="logo" />)
  .addWithJSX('logo-dark', () => <Icon name="logo-dark" />)
  .addWithJSX('logo-round', () => <Icon name="logo-round" />)
  .addWithJSX('menu', () => <Icon name="menu" />)
  .addWithJSX('plus', () => <Icon name="plus" />)
  .addWithJSX('search', () => <Icon name="search" />)
  .addWithJSX('settings', () => <Icon name="settings" />)
  .addWithJSX('share', () => <Icon name="share" />)
  .addWithJSX('subscribe', () => <Icon name="subscribe" />)
