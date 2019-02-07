import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'

import Icon from '../../atoms/icons/Icon'
import ShareTools from './ShareTools'

const propsTab = 'Props'
const defaults = {
  code: (
    <>
      <a
        href="http://www.addthis.com/bookmark.php?v=250&amp;pubid=ra-4ed4fc0e60966005"
        className="c-share-tools__toggle addthis_button_compact can-be--white o-kicker u-theme--color--base"
      >
        <span className="u-icon u-icon--xs u-theme--path-fill--base u-space--quarter--right">
          <Icon name="share" />
        </span>
        Share
      </a>
      <ul className="c-share-tools__list u-background-color--gray--light can-be--dark-dark u-theme--border-color--darker--left u-spacing--half u-padding--half">
        <li className="c-share-tools__list-item">
          <a
            className="c-share-tools__link u-theme--color--base addthis_button_facebook"
            g-plusone-count="false"
          >
            Facebook
          </a>
        </li>
        <li className="c-share-tools__list-item">
          <a
            className="c-share-tools__link u-theme--color--base addthis_button_twitter"
            g-plusone-count="false"
          >
            Twitter
          </a>
        </li>
        <li className="c-share-tools__list-item">
          <a
            className="c-share-tools__link u-theme--color--base addthis_button_google_plusone"
            g-plusone-count="false"
          >
            Google
          </a>
        </li>
        <li className="c-share-tools__list-item">
          <a
            className="c-share-tools__link u-theme--color--base addthis_button_email"
            g-plusone-count="false"
          >
            Email
          </a>
        </li>
      </ul>
    </>
  ),
}

storiesOf('molecules/components/ShareTools', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const code = object('Code', defaults.code, propsTab)
    return <ShareTools code={code} />
  })
