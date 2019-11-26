import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'

import Logo from './Logo'
import { logoNames } from './logos'
import { svgFillColors } from '../global/colors'

const propsTab = 'Props'

storiesOf('atoms/images/Logo', module)
  

  .addWithJSX('Default', () => {
    const logoNamesWithoutGain = logoNames.filter(item => item !== 'gain')
    const name = select(
      'Name',
      logoNamesWithoutGain,
      logoNamesWithoutGain[0],
      propsTab
    )
    const fill = select('Fill', svgFillColors, svgFillColors[0], propsTab)
    return <Logo name={name} fill={fill} />
  })

  .addWithJSX('GAiN', () => {
    const name = text('Name *', 'gain', propsTab)
    const fill = select('Fill', svgFillColors, svgFillColors[0], propsTab)
    const fillAccent = text('Fill Accent', '#d0021b', propsTab)
    return <Logo name={name} fill={fill} fillAccent={fillAccent} />
  })
