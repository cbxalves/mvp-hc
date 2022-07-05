import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default StyleSheet.create({
  container: {
    marginTop: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    marginTop: 32,
  },
  listItem: {
    marginBottom: 32,
  },
  emptyList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lottie: {
    height: hp('30%'),
    alignSelf: 'center',
    width: '100%',
  },
})
