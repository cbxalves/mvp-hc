import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, Image, View } from 'react-native'
import { Text, Button, useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import AppBar from 'components/AppBar'
import LoadingIcon from 'components/LoadingIcon'
import useIsFavorited from 'hooks/useIsFavorited'
import useIsHidden from 'hooks/useIsHidden'

import styles from './styles'

const TitleDetails = ({
  route,
  details,
  isLoading,
  getTitleDetails,
  toggleFavorite,
  toggleVisibility,
}) => {
  const { titleId } = route.params
  const theme = useTheme()
  const isFavorited = useIsFavorited(titleId)
  const isHidden = useIsHidden(titleId)

  useEffect(() => {
    getTitleDetails(titleId)
  }, [titleId, getTitleDetails])

  const handleToggleFavorite = () => {
    toggleFavorite(details)
  }

  const handleToggleVisibility = () => {
    toggleVisibility(titleId)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar type='back' />
      {!!details && (
        <ScrollView contentContainerStyle={styles.content}>
          <Image
            style={styles.poster}
            source={{
              uri: details.Poster,
            }}
            resizeMode='contain'
          />
          <Text style={styles.title}>{details.Title}</Text>
          <Text style={styles.plot}>{details.Plot}</Text>
          <Text style={styles.ratingLabel}>IMDb Rating</Text>
          <View style={styles.rating}>
            <Icon
              name='star'
              size={25}
              color={'rgb(245, 197, 24)'}
              style={styles.icon}
            />
            <Text
              style={styles.ratingScore}
            >{`${details.imdbRating} (${details.imdbVotes} votes)`}</Text>
          </View>

          <View style={styles.actions}>
            <Button
              color={theme.colors.accent}
              icon={isFavorited ? 'bookmark-off' : 'bookmark'}
              onPress={handleToggleFavorite}
            >
              {isFavorited
                ? 'Remove from favorites list'
                : 'Add to favorites list'}
            </Button>
            <Button
              icon={isHidden ? 'eye' : 'eye-off'}
              color='red'
              onPress={handleToggleVisibility}
            >
              {`${isHidden ? 'Unhide' : 'Hide'} from search`}
            </Button>
          </View>
        </ScrollView>
      )}
      <LoadingIcon animating={isLoading} />
    </SafeAreaView>
  )
}

export default TitleDetails
