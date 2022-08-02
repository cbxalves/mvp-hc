import { Dimensions } from 'react-native'

const windowDim = Dimensions.get('window')
const screenDim = Dimensions.get('screen')

const { width, height } = windowDim

export default {
  window: { ...windowDim },
  screen: { ...screenDim },
  spacing: 8,
  baseRadius: 4,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}
