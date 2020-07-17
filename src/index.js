export * from './atoms/index'
export * from './molecules/index'
export * from './organisms/index'
export * from './templates/index'
export * from './helpers/Element'

export * from './Body'
export {
  default as AlpsContextProvider,
  DrawerContextProvider,
  LinkContextProvider,
} from './Wrapper'

export function getExternalAssets({
  version = '3.6.3',
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
