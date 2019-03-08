import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'

function Table({ title, columns, rows, slim }) {
  return (
    <Element as="table" className={slim ? 'o-table-slim' : null} border spacing>
      {title && <caption>{title}</caption>}
      <thead>
        <tr>
          {columns.map((header, col) => (
            <th tabIndex="0" scope="col" title={title} key={`column-${col}`}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((cells, row) => (
          <tr tabIndex="0" key={`row-${row}`}>
            {cells.map((content, cell) => (
              <td tabIndex="0" key={`row-${row}-${cell}`}>
                {content}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Element>
  )
}

Table.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.array,
  rows: PropTypes.array,
  slim: PropTypes.bool,
}
Table.defaultProps = {
  columns: [],
  rows: [],
  slim: false,
}

export default Table
