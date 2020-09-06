import React from 'react'
import PropTypes from 'prop-types'

import Dropdown from './elements/Dropdown'
import { Div } from '../../helpers/Element'
import Fieldset from './elements/Fieldset'
import Form from './elements/Form'
import SubmitButton from './elements/SubmitButton'
import renderItems from '../../helpers/renderItems'

export default function FacetFilter({ facets, filterLabel, title, ...props }) {
  return (
    <Form className="c-facet-filter-form" {...props}>
      <Fieldset legend={title} spacing="half">
        <Div spacing>
          {renderItems(facets, Dropdown)}
          {/* TODO: create component for screen readers? */}
          <SubmitButton label={filterLabel} />
        </Div>
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
