import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default StyleSheet.create({
  header: {
    elevation: 0,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  back: {
    height: '100%',
    width: 60,
  },
  logo: {
    height: hp('8%'),
    width: '100%',
  },
})
