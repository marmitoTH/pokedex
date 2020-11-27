import styled from 'styled-components/native'
import { FontAwesome } from '@expo/vector-icons'

export const Container = styled.View`
  padding: 20px 40px;
  border-radius: 10px;
  background-color: #F2F2F2;
`

export const Input = styled.TextInput`
  color: #747476;
  font-size: 16px;
`

export const Icon = styled(FontAwesome)`
  top: 85%;
  left: 15px;
  color: #747476;
  font-size: 18px;
  position: absolute;
`
