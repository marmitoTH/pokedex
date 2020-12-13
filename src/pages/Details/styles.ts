import styled from 'styled-components/native'
import Constants from 'expo-constants'
import getColorFromType from '../../utils/getColorFromType'
import { Dimensions } from 'react-native'

export const Container = styled.View<{ type: string }>`
  flex: 1;
  padding-top: ${20 + Constants.statusBarHeight}px;
  background: ${({ type }) => getColorFromType(type)};
`

export const Navbar = styled.View`
  padding: 0 20px;
`

export const Header = styled.View`
  padding: 20px;
  height: ${Dimensions.get('screen').height * 0.3}px;
`

export const Main = styled.View`
  flex: 1;
  background: #fff;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`

export const ID = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`

export const Name = styled.Text`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Types = styled.View`
  flex-direction: row;
`

export const Pokemon = styled.Image`
  z-index: 1;
  width: 200px;
  height: 200px;
  position: absolute;
  align-self: center;
  bottom: -60px;
`

export const Pokeball = styled.Image`
  width: 200px;
  height: 200px;
  opacity: 0.2;
  tint-color: #fff;
  position: absolute;
  right: -30px;
  bottom: -25px;
`
