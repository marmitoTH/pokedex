import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import { Container, Input, Icon } from './styles'

interface Props extends TextInputProps {
  onSearch(query: string): void
}

const SearchBar: React.FC<Props> = ({
  onSearch,
  onChangeText,
  ...rest
}) => {
  const [timer, setTimer] = useState<number>()

  const handleChange = (text: string) => {
    if (timer) {
      clearTimeout(timer)
    }

    setTimer(setTimeout(() => {
      onSearch(text)
    }, 1000))
  }

  return (
    <Container>
      <Icon name='search' />
      <Input {...rest} onChangeText={handleChange} />
    </Container>
  )
}

export default SearchBar
