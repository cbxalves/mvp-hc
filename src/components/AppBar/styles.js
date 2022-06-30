import { StyleSheet } from 'react-native'
import { dimensions } from 'styles'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default theme =>
  StyleSheet.create({
    header: {
      zIndex: 2,
      elevation: 0,
      backgroundColor: theme.colors.primary,
      overflow: 'hidden',
    },
    headerCorp: {
      height: 80,
    },
    transparent: {
      backgroundColor: 'rgba(255,255,255,0)',
    },
    wefoodLogo: {
      height: 25,
      width: '100%',
    },
    btn: {
      left: wp('1%'),
      width: 35, // 45
      height: 35, // 45
      borderRadius: dimensions.baseRadius,
      position: 'absolute',
      zIndex: 1,
    },
    action: {
      width: 50,
      height: 50,
    },
    middle: {
      flex: 1,
    },
    titleContainer: {
      // width: '70%',
      flex: 1,
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cart: {
      position: 'relative',
    },
    badge: {
      position: 'absolute',
      right: 4,
      // top: 2,
    },
    resetContainer: {
      paddingRight: 16,
      paddingLeft: 8,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    resetBtn: {
      marginBottom: 12,
      borderRadius: 15,
      height: 30,
      width: 30,
    },
    dialogTitle: {
      color: 'red',
    },
  })
