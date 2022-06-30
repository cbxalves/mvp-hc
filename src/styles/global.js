import { StyleSheet, Platform } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import dimensions from './dimensions'
import colors from './colors'
import getTheme from 'util/getTheme'
import getBoldFont from 'util/getBoldFont'

const theme = getTheme()

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
    marginTop: hp('5%'),
    marginBottom: hp('5%'),
    flex: 1,
    width: '85%',
    alignSelf: 'center',
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
    fontFamily: getBoldFont(),
    textAlign: 'center',
    color: '#e80c6b', // theme.colors.accent,
  },
  centered: {
    width: '90%',
    alignSelf: 'center',
  },
  indicator: {
    borderBottomWidth: 4,
    borderBottomColor: theme.colors.primary,
  },
  tab: {
    width: wp('50%'),
  },
  tabRoot: {
    backgroundColor: '#fff',
    borderBottomColor: colors.light,
    paddingTop: 4,
  },
  tabLabel: {
    textTransform: 'uppercase',
  },
  libras: {
    fontFamily: 'LIBRAS2002',
    fontSize: 20,
    lineHeight: 18,
  },
  co2Container: {
    flex: 1,
  },
  co2Image: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  co2Bold: {
    paddingLeft: 8,
    fontFamily: getBoldFont(),
    ...(Platform.OS === 'ios' && { fontWeight: 'bold' }),
  },
  co2Label: {
    fontWeight: 'normal',
  },
})
