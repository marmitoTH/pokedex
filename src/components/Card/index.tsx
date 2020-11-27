import React from 'react'
import capitalize from '../../utils/capitalize'

import {
  Container,
  PatternBG,
  PokeballBG,
  PokemonImg,
  ID,
  Title
} from './styles'

import pattern from '../../assets/images/pattern/pattern.png'
import pokeball from '../../assets/images/pokeball-2-bg.png'

interface Props {
  id: number
  name: string
}

const Card: React.FC<Props> = ({ id, name }) => {
  return (
    <Container>
      <PatternBG source={pattern} />
      <PokeballBG source={pokeball} />
      <PokemonImg source={{
        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/` +
          `master/sprites/pokemon/other/official-artwork/${id}.png`
      }} />
      <ID># {`${id}`.padStart(3, '0')}</ID>
      <Title>{capitalize(name)}</Title>
    </Container>
  )
}

export default Card
