import React from 'react'

import Carousel from './Carousel'

const slides = [
  {
    heading: 'Lorem Ipsum',
    subtitle: 'Fusce nec urna ut tellus accumsan fermentum.',
    dek:
      'Morbi eleifend, mi et varius imperdiet, nunc magna ullamcorper nibh, vel varius felis dui ac arcu. Vestibulum semper commodo dolor vel congue. Curabitur eleifend ligula ut arcu finibus posuere.',
    cta: 'Mec cursus mi',
    url: 'https://www.adventist.org',
    image: {
      srcSet: {
        default: '//picsum.photos/480/270?image=1041',
        500: '//picsum.photos/750/350?image=1041',
        750: '//picsum.photos/1200/800?image=1041',
        1200: '//picsum.photos/1500/900?image=1041',
      },
      alt: 'Placeholder image',
    },
  },
  {
    heading: 'Consequatur',
    subtitle: 'Nulla exercitationem perspiciatis',
    dek: 'Debitis et aut voluptatem omnis quis quis similique.',
    cta: 'Quod voluptatibus',
    url: 'https://www.adventist.org',
    image: {
      srcSet: {
        default: '//picsum.photos/480/270?image=1044',
        500: '//picsum.photos/750/350?image=1044',
        750: '//picsum.photos/1200/800?image=1044',
        1200: '//picsum.photos/1500/900?image=1044',
      },
      alt: 'Placeholder image',
    },
  },
  {
    heading: 'Quae vel et',
    subtitle: 'Atque numquam quo non nostrum.',
    dek: 'Curabitur eleifend ligula ut arcu finibus posuere.',
    cta: 'Dolorum et ligula',
    url: 'https://www.adventist.org',
    image: {
      srcSet: {
        default: '//picsum.photos/480/270?image=1002',
        500: '//picsum.photos/750/350?image=1002',
        750: '//picsum.photos/1200/800?image=1002',
        1200: '//picsum.photos/1500/900?image=1002',
      },
      alt: 'Placeholder image',
    },
  },
  {
    heading: 'Sint incidunt ut',
    subtitle:
      'Doloribus ut dignissimos accusantium ex sapiente quia occaecati est.',
    dek:
      'Enim qui minus beatae nemo quia laborum suscipit repudiandae. Ea neque voluptatem maxime. Ut nostrum distinctio enim blanditiis debitis.',
    cta: 'Utex quia!',
    url: 'https://www.adventist.org',
    image: {
      srcSet: {
        default: '//picsum.photos/480/270?image=832',
        500: '//picsum.photos/750/350?image=832',
        750: '//picsum.photos/1200/800?image=832',
        1200: '//picsum.photos/1500/900?image=832',
      },
      alt: 'Placeholder image',
    },
  },
]

export default {
  title: 'ALPS/Molecules/Components/Carousel',
  component: Carousel,
}

const CarouselTemplate = props => <Carousel {...props} />

export const Default = CarouselTemplate.bind({})
Default.args = {
  slides,
}

export const WithDots = CarouselTemplate.bind({})
WithDots.args = {
  ...Default.args,
  showDots: true,
}

export const WithArrows = CarouselTemplate.bind({})
WithArrows.args = {
  ...Default.args,
  showArrows: true,
}
