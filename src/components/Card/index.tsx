import React, { memo } from 'react'
import TypeCard from '../TypeCard'
import capitalize from '../../utils/capitalize'
import * as Styled from './styles'

export interface CardProps {
  pokemonData: {
    id: number
    name: string
    image: string
    types: string[]
  }

  onPress(): void
}

const Card: React.FC<CardProps> = ({ pokemonData, onPress }) => {
  const pokeball = require('../../assets/images/pokeball/pokeball.png')

  return (
    <Styled.Container type={pokemonData.types[0]} onPress={onPress}>
      <Styled.ID>#{String(pokemonData.id).padStart(3, '0')}</Styled.ID>
      <Styled.Name>{capitalize(pokemonData.name)}</Styled.Name>
      <Styled.Pokeball source={pokeball} />
      <Styled.Pokemon source={{ uri: pokemonData.image }} />
      <Styled.Types>
        {pokemonData.types.map((type, key) => (
          <TypeCard key={key} type={type} />
        ))}
      </Styled.Types>
    </Styled.Container>
  )
}

export default memo(Card)
