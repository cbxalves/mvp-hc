import React, { useEffect, useState, useRef } from 'react'
import { FlatList, View, Image } from 'react-native'
import { Text, Searchbar, List } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import useDebounce from 'hooks/useDebounce'

import styles from './styles'

const Search = ({ results, dataFetched, searchTitle, resetResults }) => {
  const navigation = useNavigation()
  const searchbarRef = useRef(null)
  const [search, setSearch] = useState('')
  const [searchFocused, setFocused] = useState(false)
  const debouncedSearch = useDebounce(search, 500)

  useEffect(() => {
    if (!debouncedSearch.length) {
      resetResults()
    }
  }, [debouncedSearch.length, resetResults])

  useEffect(() => {
    if (debouncedSearch?.length >= 3) {
      searchTitle(debouncedSearch)
    }
  }, [debouncedSearch, searchTitle])

  useEffect(() => {
    return () => {
      resetResults()
      setSearch('')
    }
  }, [resetResults])

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
    <View style={[styles.container, searchFocused && styles.flex]}>
      <Searchbar
        ref={searchbarRef}
        onChangeText={handleSearchChange}
        value={search}
        placeholder='Search Movies & TV Shows...'
        style={styles.searchBar}
        onFocus={() => {
          console.tron.log('onFocus')

          setFocused(true)
        }}
        onBlur={() => {
          console.tron.log('onBlur')
          setFocused(false)
        }}
      />
      {searchFocused && (
        <FlatList
          contentContainerStyle={[
            styles.list,
            searchFocused && results?.length > 0 && styles.extraPadding,
          ]}
          data={results}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            dataFetched && <Text style={styles.emptyListText}>No results.</Text>
          }
        />
      )}
    </View>
  )
}

export default Search
