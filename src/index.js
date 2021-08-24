export {
  default as AlpsContextProvider,
  DrawerContextProvider,
  LinkContextProvider,
} from './AlpsContextProvider'

export function getExternalAssets({
  version = '3.11.4',
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

// Extracted from ALPS project (https://github.com/adventistchurch/alps/blob/v3.x/source/css/_settings.variables.scss#L153)
const breakpoints = {
  xsmall: 350,
  small: 500,
  medium: 700,
  large: 900,
  xlarge: 1100,
  xxlarge: 1300,
  xxxlarge: 1500,
}

const breakpointsWidths = Object.keys(breakpoints).map(k => breakpoints[k])

export { breakpoints, breakpointsWidths }
