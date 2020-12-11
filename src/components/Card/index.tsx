import React from 'react'
import { Text } from 'react-native'
import * as Styled from './styles'

export interface CardProps {
  pokemonData: {
    name: string
    image: string
    types: string[]
  }
}

const Card: React.FC<CardProps> = ({ pokemonData }) => {
  const pokeball = require('../../assets/images/pokeball/pokeball.png')

  return (
    <Styled.Container>
      <Styled.Name>{pokemonData.name}</Styled.Name>
      <Styled.Pokeball source={pokeball} />
      <Styled.Pokemon source={{ uri: pokemonData.image }} />
      {pokemonData.types.map((type, key) => (
        <Text key={key}>{type}</Text>
      ))}
    </Styled.Container>
  )
}

export default Card