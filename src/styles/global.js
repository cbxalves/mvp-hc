import { StyleSheet, Platform } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import dimensions from './dimensions'

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: hp('100%'),
  },
  content: {
    flex: 1,
    width: '85%',
    alignSelf: 'center',
    marginTop: hp('5%'),
    marginBottom: hp('5%'),
  },
  submitBtn: {
    padding: dimensions.spacing,
  },
  dialogText: {
    fontSize: 15,
    color: '#000',
  },
  warning: {
    fontSize: 22,
    ...(Platform.OS === 'ios' && { fontWeight: 'bold' }),
    textAlign: 'center',
    color: '#e80c6b',
  },
  centered: {
    width: '90%',
    alignSelf: 'center',
  },
})
