import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default StyleSheet.create({
  searchBar: {
    position: 'relative',
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
  listWrapper: {
    position: 'absolute',
    width: '100%',
    top: 50,
    backgroundColor: '#fff',
    zIndex: 2,
  },
  surface: {
    maxHeight: hp('75%'),
    elevation: 4,
    borderRadius: 4,
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
