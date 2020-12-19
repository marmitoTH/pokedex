import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Details from './pages/Details'

const Stack = createStackNavigator()

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Router
