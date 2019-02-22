import React from 'react'
import PropTypes from 'prop-types'

import Form from './elements/Form'
import renderItems from '../../helpers/renderItems'
import Fieldset from './elements/Fieldset'
import Facet from './elements/Facet'

function FacetFilter({ facets, filterLabel, showButton, title, ...props }) {
  const buttonClass = showButton ? '' : 'is-vishidden'
  return (
    <Form className="c-facet-filter-form" {...props}>
      <Fieldset
        legend={title}
        legendClass="u-font--secondary--m u-theme--color--darker"
        spacing="half"
      >
        <div className="u-spacing">
          {renderItems(facets, Facet)}
          <button className={`search-form__submit ${buttonClass}`}>
            <span className={buttonClass}>{filterLabel}</span>
          </button>
        </div>
      </Fieldset>
    </Form>
  )
}

FacetFilter.propTypes = {
  facets: PropTypes.array,
  filterLabel: PropTypes.string,
  showButton: PropTypes.bool,
  title: PropTypes.string,
}
FacetFilter.defaultProps = {
  facets: [],
  filterLabel: 'Filter',
}

export default FacetFilter
