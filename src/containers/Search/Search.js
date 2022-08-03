import React, { useEffect, useState, useRef } from 'react'
import { FlatList, View, Image } from 'react-native'
import { Text, Searchbar, List, Surface } from 'react-native-paper'
import { useNavigation, useIsFocused } from '@react-navigation/native'

import useDebounce from 'hooks/useDebounce'

import styles from './styles'

const Search = ({ results, dataFetched, searchTitle, resetResults }) => {
  const navigation = useNavigation()
  const isHomeFocused = useIsFocused()
  const searchbarRef = useRef(null)
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  useEffect(() => {
    if (!debouncedSearch.length) {
      resetResults()
    }
  }, [debouncedSearch.length, resetResults])

  useEffect(() => {
    if (debouncedSearch?.length >= 2) {
      searchTitle(debouncedSearch)
    }
  }, [debouncedSearch, searchTitle])

  useEffect(() => {
    if (!isHomeFocused) {
      resetResults()
      setSearch('')
    }
  }, [isHomeFocused, resetResults])

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
      />
      {results?.length > 0 && (
        <View style={styles.listWrapper}>
          <Surface style={styles.surface}>
            <FlatList
              keyboardShouldPersistTaps='handled'
              data={results}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              ListEmptyComponent={
                dataFetched && (
                  <Text style={styles.emptyListText}>No results.</Text>
                )
              }
            />
          </Surface>
        </View>
      )}
    </>
  )
}

export default Search
