import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native'

import AppBar from 'components/AppBar'

import { CreationState } from './types'
import styles from './styles'

interface Props {
  visits: CreationState
  incrementVisits(creationId: number): void
}

const Creation: React.FC<Props> = ({ route, visits, incrementVisits }) => {
  const { creationId } = route.params

  useEffect(() => {
    incrementVisits(creationId)
  }, [creationId, incrementVisits])

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle='light-content' backgroundColor='#0c5769' />
      <AppBar type='back' />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.count}>{visits[creationId]}</Text>
        <Text style={styles.text}>Visits</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Creation
