import React from 'react'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'

import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Home />
      <StatusBar
        style='light'
        translucent={false}
        backgroundColor='#EA5D60'
      />
    </>
  )
}

export default registerRootComponent(App)
