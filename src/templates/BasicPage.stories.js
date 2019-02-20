import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs'

import BasicPage from './BasicPage'

import breakoutData from '../molecules/blocks/BreakoutBlock.stories.json'
import asideData from '../organisms/asides/Aside.stories.json'
import data from './BasicPage.stories.json'

const headerTab = 'Header'
const sidebarTab = 'Sidebar'
const contentTab = 'Content'

storiesOf('templates/BasicPage', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const title = text('Title', data.title, headerTab)
    const kicker = text('Kicker', data.kicker, headerTab)
    const background = object('Background', data.background, headerTab)
    const breadcrumbs = object('Breadcrumbs', data.breadcrumbs, headerTab)

    const contentTitle = text('Content Title', data.content.title, contentTab)
    const contentText = text('Content Text', data.content.text, contentTab)

    const showSidebar = boolean('Sidebar', true, sidebarTab)
    const breakout = object('Breakout', breakoutData, sidebarTab)
    const aside = object('Aside', asideData, sidebarTab)

    const content = (
      <>
        <h2>{contentTitle}</h2>
        <p>{contentText}</p>
      </>
    )

    return (
      <div className="l-wrap">
        <div className="l-wrap__content l-content" role="document">
          <BasicPage
            aside={showSidebar ? aside : null}
            background={background}
            breadcrumbs={breadcrumbs}
            breakout={showSidebar ? breakout : null}
            content={content}
            kicker={kicker}
            title={title}
          />
        </div>
      </div>
    )
  })
