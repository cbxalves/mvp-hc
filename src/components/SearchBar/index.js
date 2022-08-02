import React, { useEffect, useState, useRef } from 'react'
import { FlatList, View, Image } from 'react-native'
import { Text, Searchbar, List } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import useDebounce from 'hooks/useDebounce'

import styles from './styles'

const Home = ({ data, fetchData }) => {
  const navigation = useNavigation()
  const searchbarRef = useRef(null)
  const [search, setSearch] = useState('')
  const [searchFocused, setFocused] = useState(false)
  const debouncedSearch = useDebounce(search, 500)

  useEffect(() => {
    if (debouncedSearch?.length >= 3) {
      fetchData(debouncedSearch)
    }
  }, [debouncedSearch, fetchData])

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
    <>
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
          data={[]}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <Text style={styles.emptyListText}>No results.</Text>
          }
        />
      )}
    </>
  )
}

export default Home
