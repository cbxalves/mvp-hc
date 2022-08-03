import React, { useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import { Text, List, IconButton } from 'react-native-paper'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import AppBar from 'components/AppBar'
import Search from 'containers/Search'
import { global } from 'styles'

import styles from './styles'

const Home = ({ favorites, hidden, toggleFavorite, toggleVisibility }) => {
  const navigation = useNavigation()
  const [isHidden, setIsHidden] = useState(false)

  const goToDetails = titleId => event => {
    navigation.navigate('TitleDetails', { titleId })
  }

  const handleItemToggle = item => event => {
    isHidden ? toggleVisibility(item) : toggleVisibility(item)
  }

  const renderItem = ({ item }) => {
    return (
      <List.Item
        title={item.Title}
        titleStyle={styles.favTitle}
        description={item.Plot}
        descriptionStyle={styles.favPlot}
        descriptionNumberOfLines={4}
        left={props => (
          <Image
            style={styles.favImage}
            source={{
              uri: item.Poster,
            }}
            resizeMode='contain'
          />
        )}
        right={props => (
          <View style={styles.favActions}>
            <View style={styles.favRating}>
              <Icon
                name='star'
                size={25}
                color={'rgb(245, 197, 24)'}
                style={styles.icon}
              />
              <Text style={styles.favScore}>{item.imdbRating}</Text>
            </View>
            <IconButton
              {...props}
              size={25}
              icon={isHidden ? 'eye' : 'bookmark-off'}
              onPress={handleItemToggle(item)}
            />
          </View>
        )}
        onPress={goToDetails(item.imdbID)}
      />
    )
  }

  return (
    <SafeAreaView style={global.root}>
      <>
        <StatusBar barStyle='dark-content' backgroundColor='#fff' />
        <AppBar />
        <View style={styles.container}>
          <Search />
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={styles.header}>
                <Text style={styles.listTitle}>
                  {isHidden ? 'Hidden Titles' : 'Favorites List'}
                </Text>
                <TouchableOpacity onPress={() => setIsHidden(!isHidden)}>
                  <Text style={styles.listSubtitle}>
                    {isHidden ? 'Favorites List' : 'Hidden Titles'}
                  </Text>
                </TouchableOpacity>
              </View>
            }
            data={isHidden ? hidden : favorites}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={
              <View style={styles.emptyList}>
                <LottieView
                  style={styles.lottie}
                  source={require('../../assets/lottie/movie.json')}
                  autoPlay
                  loop
                  autoSize
                />
                <Text style={styles.emptyListText}>
                  {`You have no ${
                    isHidden ? 'hidden' : 'favorite'
                  } movies / TV shows :(`}
                </Text>
              </View>
            }
          />
        </View>
      </>
    </SafeAreaView>
  )
}

export default Home
