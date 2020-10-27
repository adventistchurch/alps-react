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
    paddingTop: true,
    paddingBottom: true,
    themeBackground: 'darker',
    themeBorder: 'darker',
    themeBorderSide: 'left',
    themeColor: 'lighter',
  },
  image: {
    gridItem: true,
    paddingSides: 'zero',
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
    paddingSides: 'zero',
  },
  content: {
    gridItemSizeAtS: 4,
    gridItemSizeAtL: 3,
    paddingLeft: true,
    flexJustify: 'start',
  },
  title: {
    fontSize: 'l',
  },
  meta: {
    themeColor: 'base',
  },
}

const archiveHome = {
  // reversed: true, // TODO: Template says .c-block--reversed

  block: {
    gridWrap: 6,
    seven: true,
  },

  image: {
    noGridItemClass: true,
    gridItemSize: 2,
    gridItemSizeAtM: 1,
    gridItemSizeAtL: 1,
    paddingSides: 'zero',
  },

  content: {
    noGridItemClass: true,
    gridItemSize: 4,
    gridItemSizeAtM: 3,
    gridItemSizeAtL: 3,
    borderSide: 'left',
    flexJustify: 'start',
  },
  title: {
    fontSize: 'l',
  },
  meta: {
    themeColor: 'base',
  },
}

const archivePage = {
  block: {
    reversed: true, // TODO: Template says .c-block--reversed
    gridWrap: 5,
    seven: true,
    gridBreak: 'standard',
  },

  image: {
    noGridItemClass: true,
    gridItemSize: 2,
    gridItemSizeAtM: 1,
    gridItemSizeAtL: 1,
    paddingSides: 'zero',
  },

  content: {
    noGridItemClass: true,
    gridItemSize: 4,
    gridItemSizeAtM: 3,
    gridItemSizeAtXL: 2,
    flexJustify: 'start',
  },
  title: {
    fontSize: 'm',
    themeColor: 'darker',
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
    paddingSides: 'zero',
  },
  content: {
    backgroundColor: 'gray--light',
    color: 'gray',
    paddingTop: true,
    paddingBottom: true,
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
    paddingSides: 'zero',
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
    paddingTop: true,
    paddingBottom: true,
  },
  title: {
    fontSize: 'l',
  },
  meta: {
    themeColor: 'base',
  },
}

const longform = {
  type: 'inline',
  block: {
    canBe: 'dark-dark',
    gridWrap: 6,
    noGridClass: true,
    paddingTop: true,
    paddingBottom: true,
    seven: true,
    themeBackground: 'darker',
  },
  content: {
    borderSide: 'left',
    gridItemSizeAtM: 6,
    gridItemSizeAtL: 4,
    gridItemSizeAtXL: 3,
    noGridClass: true,
    shiftLeftAt: 'large',
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
    gridItemSize: 3,
    gridItemSizeAtM: 2,
    gridItemSizeAtXL: 1,
    noGridItemClass: true,
    paddingSides: 'zero',
    spaceRight: true,
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

const stacked = {
  content: {
    borderSide: 'left',
  },
  title: {
    themeColor: 'darker',
    fontType: 'primary',
    fontSize: 'm',
  },
  meta: {
    fontType: 'secondary',
    fontSize: 'xs',
    themeColor: 'dark',
  },
}

const video = {
  type: 'stacked',
  icon: 'video',

  block: {
    spaceRight: true,
    spaceBottom: 'double',
  },
  content: {
    borderSide: 'left',
    color: 'gray',
    themeBorder: 'darker',
    themeBorderSide: 'left',
  },
  title: {
    themeColor: 'darker',
    fontType: 'primary',
    fontSize: 'm',
  },
}

const relatedPost = {
  type: 'inline',
  // reversed: true, // TODO: Template says .c-block--reversed

  block: {
    seven: true,
    noGridClass: true,
  },
  image: {
    gridItemSize: 2,
    gridItemSizeAtM: 1,
    gridItemSizeAtL: 1,
    paddingRight: true,
  },
  content: {
    gridItemSize: 4,
    gridItemSizeAtM: 3,
    gridItemSizeAtL: 1,
    borderSide: 'left',
    themeBorder: 'darker',
    themeBorderSide: 'left',
    color: 'gray',
    spacing: 'half',
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
  archiveHome,
  archivePage,
  full,
  inline,
  inset,
  mediaContent,
  mediaRow,
  longform,
  row,
  stacked,
  relatedPost,
  video,
}
