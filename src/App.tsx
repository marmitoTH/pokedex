import React from 'react'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'

const App: React.FC = () => {
  return (
    <View>
      <Text>Hello World!!!</Text>
      <StatusBar style='auto' />
    </View>
  )
}

registerRootComponent(App)
