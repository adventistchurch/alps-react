import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  boolean,
  number,
  object,
  text,
  withKnobs,
} from '@storybook/addon-knobs'

import useRange from '../../helpers/useRange'
import Table from './Table'

import data from './Table.stories.json'

const propsTab = 'Props'

storiesOf('atoms/tables/Table', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const title = text('Title', data.table1.title, propsTab)
    const columns = object('Columns', data.table1.columns, propsTab)
    const rows = object('Rows', data.table1.rows, propsTab)
    const slim = boolean('Slim', false, propsTab)

    return <Table title={title} columns={columns} rows={rows} slim={slim} />
  })

  .addWithJSX('Slim', () => {
    const slim = boolean('Slim', true, propsTab)
    const title = text('Title', data.table1.title, propsTab)
    const columns = object('Columns', data.table1.columns, propsTab)
    const rows = object('Rows', data.table1.rows, propsTab)

    return <Table title={title} columns={columns} rows={rows} slim={slim} />
  })

  .addWithJSX('Playground', () => {
    const title = text('Title', 'Table A.1', propsTab)
    const colCount = number('Number of Columns', 7, {}, propsTab)
    const rowCount = number('Number of Rows', 7, {}, propsTab)
    const cellText = text('Cell text', '', propsTab)
    const slim = boolean('Slim', false, propsTab)

    const columns = useRange(1, colCount).map(col => `Header ${col}`)
    const rows = useRange(1, rowCount).map(row =>
      useRange(1, colCount).map(col => cellText || `C:${col} / R:${row}`)
    )

    return <Table title={title} columns={columns} rows={rows} slim={slim} />
  })
