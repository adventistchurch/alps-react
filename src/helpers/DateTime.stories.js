import React from 'react'

import DateTime, { dateModes, dateFormats } from './DateTime'

export default {
  title: 'ALPS/Helpers/DateTime',
  component: DateTime,
  argTypes: {
    datetime: { control: { type: 'date' } },
    mode: { control: { type: 'select', options: dateModes } },
    dateFormat: { control: { type: 'select', options: dateFormats } },
    timeFormat: { control: { type: 'select', options: dateFormats } },
    locale: {
      control: {
        type: 'select',
        options: ['en', 'es', 'fr', 'de', 'pt', 'it', 'zh', 'ar'],
      },
    },
  },
}

const DateTimeTemplate = props => <DateTime {...props} />

export const Default = DateTimeTemplate.bind({})
Default.args = {
  datetime: '2020-02-20 20:20:15',
  mode: 'datetime',
}

const FormatDate = DateTimeTemplate.bind({})
FormatDate.args = { ...Default.args, mode: 'date' }

export const FormatDateShort = DateTimeTemplate.bind({})
FormatDateShort.args = { ...FormatDate.args, dateFormat: 'short' }

export const FormatDateMedium = DateTimeTemplate.bind({})
FormatDateMedium.args = { ...FormatDate.args, dateFormat: 'medium' }

export const FormatDateLong = DateTimeTemplate.bind({})
FormatDateLong.args = { ...FormatDate.args, dateFormat: 'long' }

export const FormatDateFull = DateTimeTemplate.bind({})
FormatDateFull.args = { ...FormatDate.args, dateFormat: 'full' }

const FormatTime = DateTimeTemplate.bind({})
FormatTime.args = { ...Default.args, mode: 'time' }

export const FormatTimeShort = DateTimeTemplate.bind({})
FormatTimeShort.args = { ...FormatTime.args, timeFormat: 'short' }

export const FormatTimeMedium = DateTimeTemplate.bind({})
FormatTimeMedium.args = { ...FormatTime.args, timeFormat: 'medium' }

export const FormatTimeLong = DateTimeTemplate.bind({})
FormatTimeLong.args = { ...FormatTime.args, timeFormat: 'long' }

export const FormatTimeFull = DateTimeTemplate.bind({})
FormatTimeFull.args = { ...FormatTime.args, timeFormat: 'full' }
