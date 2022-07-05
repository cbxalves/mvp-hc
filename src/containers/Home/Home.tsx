import React, { useEffect } from 'react'
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  ListRenderItem,
  View,
  TouchableOpacity,
} from 'react-native'
import { Text } from 'react-native-paper'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'

import bannerSrc from 'assets/images/marco_mueller_banner.jpeg'
import AppBar from 'components/AppBar'
import Banner from 'components/Banner'
import ListItem from 'components/ListItem'
import LoadingIcon from 'components/LoadingIcon'
import { GLOBAL } from 'styles/global'

import { Creation } from './types'
import styles from './styles'

interface Props {
  data: Creation[]
  isLoading: boolean
  dataFetched: boolean
  fetchCreations(): void
}

const Home: React.FC<Props> = ({
  data,
  isLoading,
  dataFetched,
  fetchCreations,
}) => {
  const navigation = useNavigation()

  useEffect(() => {
    fetchCreations()
  }, [fetchCreations])

  const goToCreation = (creationId: number) => event => {
    navigation.navigate('Creation', { creationId })
  }

  const renderItem: ListRenderItem<Creation> = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.listItem}
        onPress={goToCreation(item.id)}
      >
        <ListItem item={item} />
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <>
        <StatusBar barStyle='dark-content' backgroundColor='#fff' />
        <AppBar />
        <View style={styles.container}>
          <FlatList
            ListHeaderComponent={
              <>
                <Banner
                  isNew
                  image={bannerSrc}
                  title='Fish preparation like a star chef'
                  author='Rolf Fliegauf'
                />
                {data.length > 0 && (
                  <Text style={[GLOBAL.FONTS.h1, styles.header]}>
                    Creation for you
                  </Text>
                )}
              </>
            }
            contentContainerStyle={GLOBAL.LAYOUT.pageContainer}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={
              dataFetched ? (
                <View style={styles.emptyList}>
                  <LottieView
                    style={styles.lottie}
                    source={require('../../assets/lottie/chef.json')}
                    autoPlay
                    loop
                    autoSize
                  />
                  <Text style={styles.emptyListText}>
                    No creations for you :(
                  </Text>
                </View>
              ) : null
            }
          />
        </View>
        <LoadingIcon animating={isLoading} />
      </>
    </SafeAreaView>
  )
}

export default Home
