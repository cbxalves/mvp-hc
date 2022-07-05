import React from 'react'
import { View, Image, ImageSourcePropType } from 'react-native'
import { Text } from 'react-native'

import styles from './styles'

export interface Props {
  image: ImageSourcePropType
  title: string
  isNew?: boolean
  author: string
}

const Banner: React.FC<Props> = ({ image, title, author, isNew }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} resizeMode='cover' />
      <View style={styles.content}>
        {isNew && <Text style={styles.new}>NEW</Text>}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{`With ${author}`}</Text>
      </View>
    </View>
  )
}

export default Banner
