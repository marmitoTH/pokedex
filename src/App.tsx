import React from 'react'
import { registerRootComponent } from 'expo'

import Home from './pages/Home'
import Profile from './pages/Profile'

const App = () => {
  return (
    <>
      <Profile />
    </>
  )
}

export default registerRootComponent(App)
