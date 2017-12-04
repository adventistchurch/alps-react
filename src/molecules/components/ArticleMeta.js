import React from 'react'
import PropTypes from 'prop-types'

import DateTimeFormat from '../../helpers/datetimeFormat'

const Metadata = ({ data, className }) => (
  <span className={`${className} font--secondary--s gray can-be--white`}>
    {data}
  </span>
)
Metadata.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
}

const Divider = ({ showIf }) => showIf && <span className="divider">|</span>

const ArticleMeta = ({ name, date, region, dateFormat = '' }) => (
  <div className="article__meta">
    <Metadata
      data={DateTimeFormat({ date, dateFormat })}
      className="pub_date"
    />{' '}
    <Divider showIf={!!date} />{' '}
    <Metadata data={region} className="pub_region" />{' '}
    <Divider showIf={!!region} /> <Metadata data={name} className="byline" />
  </div>
)

ArticleMeta.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  region: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  dateFormat: PropTypes.string,
}

export default ArticleMeta
