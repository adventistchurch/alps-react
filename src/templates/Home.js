import React from 'react'

import BasicPage from './BasicPage'

function Home({ ...props }) {
  return <BasicPage {...props} />
}

// {% if has_short_body %}
// {% include '@organisms/content/body-content-short.twig' %}
// {% else %}
// {% include '@organisms/content/body-content.twig' %}
// {% endif %}

Home.propTypes = {
  ...BasicPage.props,
}

export default Home
