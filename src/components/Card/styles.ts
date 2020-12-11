import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  height: 130px;
  padding: 20px;
  overflow: hidden;
  margin-bottom: 15px;
  border-radius: 10px;
  background: #ea5d60;
`

export const ID = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: rgba(23, 23, 27, 0.5);
`

export const Name = styled.Text`
  margin-bottom: 5px;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`

export const Types = styled.View`
  flex-direction: row;
`

export const Pokemon = styled.Image`
  width: 115px;
  height: 115px;
  position: absolute;
  right: 5px;
  bottom: 5px;
`

export const Pokeball = styled.Image`
  opacity: 0.1;
  width: 130px;
  height: 130px;
  position: absolute;
  right: -10px;
  bottom: -15px;
  tint-color: #fff;
`
