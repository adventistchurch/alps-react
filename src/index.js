export {
  default as AlpsContextProvider,
  DrawerContextProvider,
  LinkContextProvider,
} from './AlpsContextProvider'

export function getExternalAssets({
  version = '3.9.3',
  theme = 'bluejay',
} = {}) {
  // Sets suffix for ALPS CSS theme (if `theme` provided)
  const themeSuffix = theme ? `-${theme}` : ''

  return {
    css: [
      '//fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i|Noto+Serif:400,400i,700,700i&display=swap',
      `//cdn.adventist.org/alps/3/${version}/css/main${themeSuffix}.css`,
    ],
  }
}
