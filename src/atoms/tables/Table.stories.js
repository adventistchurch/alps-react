import React from 'react'

import Table from './Table'

export default {
  title: 'ALPS/Atoms/Tables/Table',
  component: Table,
}

const TableTemplate = props => <Table {...props} />

export const Default = TableTemplate.bind({})
Default.args = {
  columns: ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'Heading 5'],
  rows: [
    ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
    ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
    ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
    ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
    ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
    ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
    ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5'],
  ],
}

export const Slim = TableTemplate.bind({})
Slim.args = {
  ...Default.args,
  slim: true,
}

export const WithTitle = TableTemplate.bind({})
WithTitle.args = {
  ...Default.args,
  title: 'Table A.1',
}
