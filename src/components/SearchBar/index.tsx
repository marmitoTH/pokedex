import React from 'react'
import { StyleProp, TextInputProps, TextStyle } from 'react-native'
import * as Styled from './styles'

interface Props extends TextInputProps {
  style: StyleProp<TextStyle>
}

const SearchBar: React.FC<Props> = ({ children, style, ...rest }) => (
  <Styled.Container style={style}>
    <Styled.Input {...rest} />
    <Styled.Icon name='search' />
  </Styled.Container>
)

export default SearchBar
