import styled from 'styled-components/native'
import Constants from 'expo-constants'

export const Container = styled.View`
  flex: 1;
  padding: 25px;
  padding-bottom: 0;
  margin-top: ${Constants.statusBarHeight}px;
`

export const Pokeball = styled.Image`
  z-index: -1;
  opacity: 0.025;
  width: 350px;
  height: 350px;
  position: absolute;
  align-self: center;
  top: -175px;
`

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
`

export const Description = styled.Text`
  font-size: 16px;
  line-height: 20px;
  margin-top: 10px;
`

export const Input = styled.TextInput`
  padding: 20px;
  background: #F2F2F2;
  margin-top: 25px;
  border-radius: 50px;
`

export const List = styled.FlatList`
  margin-top: 45px;
`
