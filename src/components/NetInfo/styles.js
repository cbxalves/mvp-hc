import { StyleSheet } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export default StyleSheet.create({
  container: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    height: hp('60%'),
    width: '100%',
  },
  text: {
    marginTop: hp('5%'),
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    width: '80%',
  },
})
