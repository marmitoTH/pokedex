import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  min-height: 115px;
  padding: 20px;
  background: #EA5D60;
  border-radius: 10px;
  elevation: 5;
`

export const PatternBG = styled.Image`
  width: 100px;
  left: 100px;
  resize-mode: contain;
  position: absolute;
`

export const PokeballBG = styled.Image`
  right: 0;
  position: absolute;
`

export const PokemonImg = styled.Image`
  width: 130px;
  height: 130px;
  right: 5px;
  bottom: 10px;
  position: absolute;
`

export const ID = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  font-weight: bold;
`

export const Title = styled.Text`
  color: #FFFFFF;
  font-size: 26px;
  font-weight: bold;
`
