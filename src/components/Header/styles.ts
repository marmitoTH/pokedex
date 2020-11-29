import styled from 'styled-components/native'
import { Animated } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  width: 100%;
  position: absolute;
  padding: 10px 20px;
  align-items: center;
  flex-direction: row;
`

export const Button = styled(RectButton)`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`

export const Icon = styled(Feather)`
  color: #fff;
  font-size: 30px;
`

export const Title = styled(Animated.Text)`
  position: absolute;
  width: 100%;
  left: 20px;
  color: #fff;
  font-size: 26px;
  text-align: center;
  font-weight: bold;
`
