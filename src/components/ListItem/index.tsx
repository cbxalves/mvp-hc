import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import FastImage from 'react-native-fast-image'

import { Creation } from 'containers/Home/types'

interface Props {
  item: Creation
}

const ListItem: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={{
          uri: item.img_url,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.web,
        }}
        resizeMode={FastImage.resizeMode.cover}
        fallback
      />
      <Text style={[styles.title]}>{item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: wp('44%'),
  },
  image: {
    width: '100%',
    height: hp('25%'),
    borderRadius: 8,
  },
  title: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default ListItem
