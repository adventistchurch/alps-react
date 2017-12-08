import React from 'react'
import PropTypes from 'prop-types'

import dateTimeFormat from '../../helpers/datetimeFormat'
import SeparateChildren from '../../helpers/SeparateChildren'

const Metadata = ({ children, className }) => (
  <span className={`${className} font--secondary--s gray can-be--white`}>
    {children}
  </span>
)
Metadata.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const Divider = () => <span className="divider">|</span>

const ArticleMeta = ({ name, date, region, dateFormat = '' }) => {
  const pubDate = date ? dateTimeFormat({ date, dateFormat }) : null
  return (
    <div className="article__meta">
      <SeparateChildren separator={<Divider />}>
        <Metadata className="pub_date">{pubDate}</Metadata>
        <Metadata className="pub_region">{region}</Metadata>
        <Metadata className="byline">{name}</Metadata>
      </SeparateChildren>
    </div>
  )
}

ArticleMeta.propTypes = {
  name: PropTypes.string,
  region: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  dateFormat: PropTypes.string,
}
ArticleMeta.defaultProps = {
  dateFormat: 'date',
}

export default ArticleMeta
