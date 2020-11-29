import styled from 'styled-components/native'
import { Animated } from 'react-native'

export const Container = styled(Animated.View)`
  align-items: center;
  flex-direction: row-reverse;
  transform: translateY(-25px);
`

export const ID = styled.Text`
  color: rgba(23, 23, 27, 0.6);
  font-size: 16px;
  font-weight: bold;
`

export const Name = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
`

export const Types = styled.View`
  margin-top: 5px;
  flex-direction: row;
`

export const Artwork = styled.View`
  align-items: center;
  justify-content: center;
  transform: translateX(-25px);
`

export const ArtworkImg = styled.Image`
  width: 125px;
  height: 125px;
`

export const ArtworkBG = styled.Image`
  width: 125px;
  position: absolute;
  resize-mode: contain;
`
