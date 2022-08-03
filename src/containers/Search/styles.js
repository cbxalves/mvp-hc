import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default StyleSheet.create({
  container: {
    // flex: 1,
    // width: '90%',
    // alignSelf: 'center',
  },
  searchBar: {},
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
    width: '100%',
  },
  extraPadding: {
    marginTop: 16,
    paddingBottom: hp('10%'),
  },
  emptyList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})
