import React from 'react'
import { storiesOf } from '@storybook/react'
import { color as colorPicker, select} from '@storybook/addon-knobs'

import IconWrap, { iconSizes } from './IconWrap'
import { Div, Link } from '../../helpers/Element'
import { iconNames } from './Icon'
import {
  svgFillColors,
  themeColors,
  themeBackgroundColors,
} from '../../atoms/global/colors'

function setOptions(options, labelFormat) {
  const newOptions = {}
  for (const option of options) {
    newOptions[labelFormat ? labelFormat(option) : option] = option
  }
  return { '-': null, ...newOptions }
}

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Element.defaultProps,
    ...settings,
  }
}

function iconWrapTab(settings = {}) {
  const {
    background,
    color,
    themeColor,
    name,
    size,
    hideName,
    tab,
  } = getTabData('Props', settings)

  return {
    name: hideName ? null : select('Icon name *', iconNames, name, tab),
    color: select('Color', setOptions(svgFillColors), color, tab),
    themeColor: select('Theme Color', setOptions(themeColors), themeColor, tab),
    fill: colorPicker('Fill', '', tab),
    background: select(
      'Background',
      setOptions(themeBackgroundColors),
      background,
      tab
    ),
    size: select('Size', iconSizes, size, tab),
  }
}

storiesOf('atoms/icons/IconWrap', module)
  

  .addWithJSX('Default', () => {
    const { name, size, color, background, themeColor, fill } = iconWrapTab({
      name: 'logo',
      size: 'xl',
    })

    return (
      <IconWrap
        name={name}
        size={size}
        themeColor={themeColor}
        color={color}
        background={background}
        fill={fill}
      />
    )
  })

  .addWithJSX('All icons', () => {
    const props = iconWrapTab({ size: 'xl', hideName: true })

    return (
      <Div flex flexJustify="center">
        {iconNames.map(icon => (
          <Link
            href={`/?path=/story/atoms-icons-icon--${icon}`}
            target="_blank"
            key={icon}
            flex
            flexColumn
            flexAlign="center"
            space
            spacing
            padding
            border
            themeBorder={props.themeColor}
            themeBackground={props.background}
          >
            <IconWrap {...props} name={icon} />
            <Div themeBackground="white" paddingSize="quarter">
              <Div
                color={props.color}
                themeColor={props.themeColor}
                spaceSize="quarter"
                strong
              >
                <code>{icon}</code>
              </Div>
            </Div>
          </Link>
        ))}
      </Div>
    )
  })
