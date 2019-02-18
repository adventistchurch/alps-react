import React from 'react'
import PropTypes from 'prop-types'

function Table({ title, columns, rows, slim }) {
  return (
    <table className={`u-spacing ${slim ? 'o-table-slim' : ''} u-border`}>
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
    </table>
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
