import React from 'react'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import Home from './pages/Home'

const App: React.FC = () => (
  <>
    <Home />
    <StatusBar style='auto' />
  </>
)

registerRootComponent(App)
