// Media Block's presets

const defaultBlock = {
  title: {
    fontSize: 'l',
  },
}

const column = {
  content: {
    color: 'white',
  },
  group: {
    flexJustify: 'center',
    overlay: 'dark',
  },
  title: {
    flexJustify: 'center',
    fontSize: 'xl',
    fontType: 'primary',
  },
}

const feature = {
  type: 'inline',

  block: {
    seven: true,
  },
  content: {
    gridItem: true,
    paddingSide: ['top', 'bottom'],
    themeBackground: 'darker',
    themeBorder: 'darker',
    themeBorderSide: 'left',
    themeColor: 'lighter',
  },
  image: {
    gridItem: true,
    paddingSide: 'sides',
    paddingSize: 'zero',
  },
  title: {
    color: 'white',
    fontType: 'primary',
    fontSize: 'l',
    fontWeight: 'bold',
    themeColor: 'lighter',
  },
  titleLink: {
    themeLinkHover: 'light',
  },
}

const featureHalf = {
  ...feature,

  block: {
    ...feature.block,
    gridWrap: 6,
  },
  content: {
    ...feature.content,
    gridItemSizeAtM: 3,
  },
  image: {
    ...feature.image,
    gridItemSizeAtM: 3,
  },
}

const featureWide = {
  ...featureHalf,

  content: {
    ...featureHalf.content,
    gridItemSizeAtL: 2,
  },
  image: {
    ...featureHalf.image,
    gridItemSizeAtL: 4,
  },
}

const featuredNews = {
  stackedUntilSmall: true,
  seven: true,
  block: {
    gridBreak: 'large',
    gridWrap: true,
    seven: true,
    spacingUntil: 'small',
  },
  image: {
    gridItemSizeAtS: 2,
    gridItemSizeAtL: 1,
    paddingSize: 'zero',
    paddingSide: 'sides',
  },
  content: {
    gridItemSizeAtS: 4,
    gridItemSizeAtL: 3,
    paddingSide: 'left',
    flexJustify: 'start',
  },
  title: {
    fontSize: 'l',
  },
  meta: {
    themeColor: 'base',
  },
}

const full = {
  content: {
    color: 'white',
    gridWrap: '7',
    noGridClass: true,
    seven: true,
  },
  group: {
    flexAlign: 'center',
    flexJustify: 'center',
    overlay: 'dark',
    textAlign: 'center',
  },
  title: {
    flexJustify: 'center',
    fontType: 'primary',
    fontSize: 'xl',
    gridItemSize: 5,
    gridItemSizeAtM: 2,
    noGridItemClass: true,
  },
}

const inline = {
  reversed: true,
  image: {
    paddingSide: 'sides',
    paddingSize: 'zero',
  },
  content: {
    backgroundColor: 'gray--light',
    color: 'gray',
    padding: ['top', 'bottom'],
  },
  contentReversed: {
    borderAt: 'large',
    borderColor: 'black',
    borderSide: 'left',
    themeBorder: 'darker',
    themeBorderSide: 'left',
  },
  title: {
    themeColor: 'darker',
  },
  meta: {
    themeColor: 'dark',
  },
}

const inset = {
  content: {
    noGridClass: true,
    seven: true,
    themeBackground: 'darker',
  },
  title: {
    gridItemSizeAtM: 4,
    linkHoverColor: 'white',
  },
  meta: {
    gridItemSizeAtM: 2,
  },
}

const mediaContent = {
  type: 'inline',
  reversed: true,
  seven: true,

  block: {
    gridWrap: 6,
    seven: true,
  },
  image: {
    gridItemSizeAtS: 3,
    paddingSize: 'zero',
    paddingSide: 'sides',
  },
  content: {
    gridItemSizeAtS: 3,
    flexJustify: 'between',
    spacing: true,
    borderColor: 'black',
    borderSide: 'left',
    borderAt: 'large',
    themeBorder: 'darker',
    themeBorderSide: 'left',
    color: 'gray',
    backgroundColor: 'gray--light',
    canBe: 'dark-dark',
    paddingSide: ['top', 'bottom'],
  },
  title: {
    fontSize: 'l',
  },
  meta: {
    themeColor: 'base',
  },
}

const mediaRow = {
  type: 'stacked',
  seven: true,

  block: {
    gridWrap: true,
    gridItemSize: 3,
    gridItemSizeAtM: 2,
    gridItemSizeAtXL: 1,
    noGridItemClass: true,
    seven: true,
  },
  image: {
    blockIconType: 'gallery',
    gridItemSize: 3,
    gridItemSizeAtM: 2,
    gridItemSizeAtXL: 1,
    noGridItemClass: true,
    paddingSide: 'sides',
    paddingSize: 'zero',
    spaceSide: 'right',
  },
  content: {
    gridItemSize: 3,
    gridItemSizeAtM: 2,
    gridItemSizeAtXL: 1,
    borderSide: 'left',
    noGridItemClass: true,
    spacing: true,
  },
  title: {
    fontSize: 's',
  },
  meta: {
    fontType: 'secondary',
    fontSize: 'xs',
    themeColor: 'base',
  },
}

const longform = {
  type: 'inline',
  block: {
    canBe: 'dark-dark',
    gridWrap: true,
    noGridClass: true,
    paddingSide: ['top', 'bottom'],
    seven: true,
    themeBackground: 'darker',
  },
  content: {
    borderSide: 'left',
    gridItemSizeAtM: 6,
    gridItemSizeAtL: 4,
    gridItemSizeAtXL: 3,
    noGridClass: true,
    shiftAt: 'large',
    shiftSide: 'left',
    themeBorder: 'light',
    themeBorderSide: 'left',
    themeColor: 'lighter',
  },
  title: {
    color: 'white',
    fontType: 'primary',
  },
  titleLink: {
    themeLinkHover: 'light',
  },
}

const row = {
  content: {
    color: 'gray',
  },
  title: {
    themeColor: 'darker',
  },
  meta: {
    themeColor: 'dark',
  },
}

const stacked = {}

const relatedPost = {
  type: 'inline',
  block: {
    reversed: true,
    seven: true,
    noGridClass: true,
  },
  image: {
    gridItemSize: 2,
    gridItemSizeAtM: 1,
    gridItemSizeAtL: 1,
    paddingSide: 'right',
  },
  content: {
    gridItemSize: 4,
    gridItemSizeAtM: 3,
    gridItemSizeAtL: 1,
    borderSide: 'left',
    themeBorder: 'darker',
    themeBorderSide: 'left',
    color: 'gray',
    spacingSize: 'half',
  },
  title: {
    themeColor: 'dark',
    fontType: 'primary',
    fontSize: 's',
  },
  meta: {
    themeColor: 'base',
    fontType: 'secondary',
    fontSize: 'xs',
  },
}

export default {
  default: defaultBlock,
  column,
  feature,
  featureHalf,
  featureWide,
  featuredNews,
  full,
  inline,
  inset,
  mediaContent,
  mediaRow,
  longform,
  row,
  stacked,
  relatedPost,
}
