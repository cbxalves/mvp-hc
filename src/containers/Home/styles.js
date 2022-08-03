import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    width: '90%',
    alignSelf: 'center',
    position: 'relative',
  },
  list: {
    flex: 1,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 24,
    marginBottom: 16,
  },
  favTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 4,
  },
  favImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  favPlot: {
    fontSize: 14,
  },
  favRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favScore: {
    paddingLeft: 8,
    fontSize: 16,
  },
  emptyList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '90%',
    textAlign: 'center',
  },
  lottie: {
    height: hp('30%'),
    alignSelf: 'center',
    width: '100%',
  },
})
