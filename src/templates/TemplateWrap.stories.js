import React from 'react'
import { storiesOf } from '@storybook/react'

import TemplateWrap from './TemplateWrap'

// Stories and data
import { useHeaderTab } from '../organisms/global/Header.stories.js'
import { footerTab as globalFooterTab } from '../organisms/global/Footer.stories.js'
import { sabbathTab as globalSabbathTab } from '../organisms/asides/Sabbath.stories.js'
import { pageHeaderTab } from '../organisms/sections/PageHeader.stories.js'
import data from './News.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...TemplateWrap.defaultProps,
    ...data,
    ...settings,
  }
}

export { pageHeaderTab }

export function useGlobalTab(settings = {}) {
  const { globalHeader, globalFooter, globalSabbath, tab } = getTabData(
    'Global',
    settings
  )

  return {
    header: useHeaderTab({ ...globalHeader, tab }),
    footer: globalFooterTab({ ...globalFooter, tab }),
    sabbath: globalSabbathTab({ ...globalSabbath, tab }),
  }
}

storiesOf('templates/TemplateWrap', module).addWithJSX('Default', () => {
  const props = useGlobalTab()

  return <TemplateWrap {...props} />
})
