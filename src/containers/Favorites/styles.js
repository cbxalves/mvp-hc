import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    // width: '90%',
    // alignSelf: 'center',
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
  searchBar: {
    marginBottom: 16,
    width: '90%',
    alignSelf: 'center',
  },
  searchItemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 4,
  },
  searchItemImage: {
    width: 80,
    height: 80,
  },
  list: {
    // marginBottom: hp('20%'),
    // height: hp('100%'),
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
