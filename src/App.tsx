import 'react-native-gesture-handler'
import React from 'react'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import Router from './Router'

const App: React.FC = () => (
  <>
    <Router />
    <StatusBar style='auto' />
  </>
)

registerRootComponent(App)
