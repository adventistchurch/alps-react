import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'

export default function Table({ title, columns, rows, slim }) {
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
  /**
   * Table's title
   */
  title: PropTypes.string,
  /**
   * Columns headers
   */
  columns: PropTypes.array,
  /**
   * Table rows
   */
  rows: PropTypes.array.isRequired,
  /**
   * Reduces spacing for cells
   */
  slim: PropTypes.bool,
}
Table.defaultProps = {
  columns: [],
}
