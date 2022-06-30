import { View, Text } from 'react-native'
import React, { useState, useRef } from 'react'

interface Person {
  firstName: string
  lastName: string
}

interface Props {
  text: string
  fn?: () => number
  person: Person
}

const TextField: React.FC<Props> = ({ text }) => {
  const [count, setCount] = useState<number | null>(5)
  const textRef = useRef<Text>(null)

  return (
    <View>
      <Text ref={textRef}>{text}</Text>
    </View>
  )
}

export default TextField
