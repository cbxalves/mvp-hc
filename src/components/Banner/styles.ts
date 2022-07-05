import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default StyleSheet.create({
  container: {
    position: 'relative',
  },
  content: {
    margin: 16,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: hp('25%'),
    borderRadius: 8,
  },
  new: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    flexShrink: 1,
    fontWeight: 'bold',
    paddingVertical: 8,
    width: '75%',
  },
  author: {
    color: '#fff',
    fontSize: 16,
    paddingTop: 4,
  },
})
