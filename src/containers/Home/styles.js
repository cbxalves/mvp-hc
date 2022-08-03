import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
    width: '90%',
    alignSelf: 'center',
    position: 'relative',
  },
  header: {
    marginTop: 32,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  listSubtitle: {
    textDecorationLine: 'underline',
  },
  favTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 4,
  },
  favImage: {
    width: 80,
    height: 100,
    alignSelf: 'center',
  },
  favPlot: {
    fontSize: 14,
  },
  favActions: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  favRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favScore: {
    fontSize: 16,
  },
  emptyList: {
    marginTop: hp('2%'),
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
