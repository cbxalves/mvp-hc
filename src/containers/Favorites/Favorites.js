import React, { useEffect, useState, useRef, useMemo } from 'react'
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  TouchableOpacity,
  Image,
} from 'react-native'
import { Text, Searchbar, List } from 'react-native-paper'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'

import AppBar from 'components/AppBar'
// import Banner from 'components/Banner'
import ListItem from 'components/ListItem'
import LoadingIcon from 'components/LoadingIcon'
import { global } from 'styles'
import useDebounce from 'hooks/useDebounce'

import styles from './styles'

const Home = ({ results, isLoading, searchTitle }) => {
  const navigation = useNavigation()
  const searchbarRef = useRef(null)
  const [search, setSearch] = useState('')
  const [searchFocused, setFocused] = useState(false)
  const debouncedSearch = useDebounce(search, 500)
  // const throttledSearch = useMemo(() => {
  //   return debounce(title => searchTitle(title), 1000)
  // }, [searchTitle])

  useEffect(() => {
    if (debouncedSearch?.length >= 3) {
      searchTitle(debouncedSearch)
    }
  }, [debouncedSearch, searchTitle])

  const handleSearchChange = searchText => {
    setSearch(searchText)
  }

  const goToDetails = titleId => event => {
    navigation.navigate('TitleDetails', { titleId })
  }

  const renderItem = ({ item }) => {
    return (
      <List.Item
        title={item.Title}
        titleStyle={styles.searchItemTitle}
        description={() => (
          <View>
            <Text>{`${item.Year} (${item.Type})`}</Text>
          </View>
        )}
        left={props => (
          <Image
            style={styles.searchItemImage}
            source={{
              uri: item.Poster,
            }}
            resizeMode='contain'
          />
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
          <Searchbar
            ref={searchbarRef}
            onChangeText={handleSearchChange}
            value={search}
            placeholder='Search Movies & TV Shows...'
            style={styles.searchBar}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          {searchFocused && (
            <FlatList
              data={results}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              // ListEmptyComponent={
              //   <View style={styles.emptyList}>
              //     <LottieView
              //       style={styles.lottie}
              //       source={require('../../assets/lottie/chef.json')}
              //       autoPlay
              //       loop
              //       autoSize
              //     />
              //     <Text style={styles.emptyListText}>
              //       No creations for you :(
              //     </Text>
              //   </View>
              // }
            />
          )}
        </View>
        <LoadingIcon animating={isLoading} />
      </>
    </SafeAreaView>
  )
}

export default Home
