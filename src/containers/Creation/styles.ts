import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import { GLOBAL } from 'styles/global'

export default StyleSheet.create({
  safeArea: {
    ...GLOBAL.LAYOUT.SafeArea,
    backgroundColor: '#0c5769',
  },
  content: {
    flex: 1,
    top: hp('30%'),
    alignItems: 'center',
  },
  count: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    marginTop: 16,
    color: '#fff',
    fontSize: 24,
  },
})
