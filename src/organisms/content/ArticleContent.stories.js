import React from 'react'
import { storiesOf } from '@storybook/react'

import { Link, Paragraph } from '../../helpers/Element'
import ArticleContent from './ArticleContent'
import ArticleWrap from './ArticleWrap'

storiesOf('organisms/content/ArticleContent', module).addWithJSX(
  'Default',
  () => {
    return (
      <ArticleContent>
        <ArticleWrap hasDropcap spacingSize="double">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <Link href="https://adventist.org">Donec malesuada</Link>, est ut
            viverra euismod, dui dolor gravida massa, sed aliquam ex nisl ut
            metus. Mauris at ante laoreet, gravida odio gravida, fermentum
            lectus. Fusce ac sollicitudin purus. Morbi et diam nunc. Praesent
            fringilla magna nisl, et volutpat nisi tincidunt aliquet. In laoreet
            ligula vel porttitor condimentum. In mattis ultricies placerat.
            Morbi interdum hendrerit tempus. Donec consequat elit vitae justo
            ornare, eget elementum quam consequat. Quisque auctor ex et congue
            finibus. Proin sed nisl ac velit aliquam euismod non tincidunt
            lectus. In enim ex, commodo feugiat porttitor sed, eleifend vitae
            ipsum. Suspendisse lorem nisl, suscipit at tellus quis, porttitor
            convallis sem.
          </Paragraph>
          <Paragraph>
            <Link href="https://adventist.org">
              Vestibulum ipsum orci, egestas eu erat non, posuere maximus quam.
            </Link>{' '}
            Quisque tincidunt turpis id accumsan hendrerit. Cras eleifend, arcu
            sit amet faucibus blandit, dolor urna euismod sem, non molestie
            nulla nulla porta nibh. Integer commodo arcu vitae nisl iaculis, non
            hendrerit arcu sodales. Vivamus sagittis quam ut elit posuere
            ultrices. In blandit erat orci, vitae posuere enim vehicula quis.
            Nullam posuere mauris odio, eu facilisis lorem iaculis ut. Aenean
            tortor turpis, sollicitudin ut est eget, mattis feugiat arcu. Etiam
            est magna, aliquet ut blandit sit amet, malesuada a lacus. Nam
            scelerisque arcu non sem auctor molestie. Vestibulum sit amet congue
            ex.
          </Paragraph>
        </ArticleWrap>
      </ArticleContent>
    )
  }
)
