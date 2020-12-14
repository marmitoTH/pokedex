import 'react-native-gesture-handler'
import React from 'react'
import { registerRootComponent } from 'expo'
import Router from './Router'

const App: React.FC = () => <Router />

registerRootComponent(App)
