export {
  default as AlpsContextProvider,
  DrawerContextProvider,
  LinkContextProvider,
} from './AlpsContextProvider'

export function getExternalAssets({
  version = '3.7.9',
  theme = 'bluejay',
} = {}) {
  return {
    css: [
      '//fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i|Noto+Serif:400,400i,700,700i',
      `//cdn.adventist.org/alps/3/${version}/css/main${
        theme ? `-${theme}` : ''
      }.css`,
    ],
  }
}
