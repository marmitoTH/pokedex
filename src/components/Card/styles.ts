import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import getColorFromType from '../../utils/getColorFromType'

export const Container = styled(RectButton) <{ type: string }>`
  height: 130px;
  padding: 20px;
  overflow: hidden;
  margin-bottom: 15px;
  border-radius: 15px;
  background: ${({ type }) => getColorFromType(type)};
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
  width: 150px;
  height: 150px;
  position: absolute;
  right: -15px;
  bottom: -15px;
  tint-color: #fff;
`
