import React from 'react'
import { Container, Pokeball, Title, Description, Input } from './styles'

const Home: React.FC = () => {
  const pokeball = require('../../assets/images/pokeball/pokeball.png')

  return (
    <Container>
      <Pokeball source={pokeball} />
      <Title>Pokédex</Title>
      <Description>Search for Pokémon by name or using the National Pokédex number.</Description>
      <Input placeholder='What Pokémon are you looking for?' />
    </Container>
  )
}

export default Home
