import React from 'react'
import PropTypes from 'prop-types'

import Dropdown from './elements/Dropdown'
import Element from '../../helpers/Element'
import Fieldset from './elements/Fieldset'
import Form from './elements/Form'
import renderItems from '../../helpers/renderItems'

function FacetFilter({ facets, filterLabel, title, ...props }) {
  // Remove from the flow but leave available to screen readers
  const screenReaderClass = 'is-vishidden'

  return (
    <Form className="c-facet-filter-form" {...props}>
      <Fieldset legend={title} spacing="half">
        <Element spacing>
          {renderItems(facets, Dropdown)}
          {/* TODO: create component for screen readers? */}
          <button className={`search-form__submit ${screenReaderClass}`}>
            <span className={screenReaderClass}>{filterLabel}</span>
          </button>
        </Element>
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
  title: 'Filter the results',
  facets: [],
  filterLabel: 'Filter',
}

export default FacetFilter
