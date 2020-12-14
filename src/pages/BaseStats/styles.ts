import { color } from 'react-native-reanimated'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 20px 40px;
`

export const Description = styled.Text`
  color: #747476;
  font-size: 12px;
  line-height: 14px;
  margin: 20px 0;
`

export const Title = styled.Text<{ color: string }>`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${props => props.color};
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`

export const LeftText = styled.Text`
  color: #000;
  font-size: 12px;
  min-width: 90px;
  font-weight: bold;
`

export const RightText = styled.Text`
  color: #747476;
  min-width: 40px;
`

export const Types = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`

export const TypeContainer = styled.View`
  align-items: center;
  margin-right: 10px;
  margin-bottom: 20px;
`

export const TypeIcon = styled.Image<{ color: string }>`
  margin-bottom: 10px;
  tint-color: ${props => props.color};
`

export const TypeValue = styled.Text`
  color: #747476;
  text-align: center;
`
