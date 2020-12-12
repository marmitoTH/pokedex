import styled from 'styled-components/native'
import Constants from 'expo-constants'
import getColorFromType from '../../utils/getColorFromType'

export const Container = styled.View<{ type: string }>`
  flex: 1;
  padding: 20px;
  margin-top: ${Constants.statusBarHeight}px;
  background: ${({ type }) => getColorFromType(type)};
`

export const ID = styled.Text``

export const Name = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Types = styled.View`
  flex-direction: row;
`
