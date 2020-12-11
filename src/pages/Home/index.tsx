import React, { useEffect, useState } from 'react'
import IPokemon from '../../types/IPokemon'
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Card from '../../components/Card'
import * as Styled from './styles'

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>()
  const pokeball = require('../../assets/images/pokeball/pokeball.png')

  useEffect(() => {
    const fetchData = async () => {
      const pokemons = await AsyncStorage.getItem('@pokedex/pokemons')

      if (pokemons) {
        setPokemons(JSON.parse(pokemons))
        return
      }

      await api.get<IPokemon[]>('/').then(async response => {
        const pokemons = response.data
        await AsyncStorage.setItem('@pokedex/pokemons', JSON.stringify(pokemons))
        setPokemons(pokemons)
      })
    }

    fetchData()
  }, [])

  return (
    <Styled.Container>
      <Styled.Pokeball source={pokeball} />
      <Styled.Title>Pokédex</Styled.Title>
      <Styled.Description>
        Search for Pokémon by name or using the National Pokédex number.
      </Styled.Description>
      <Styled.Input placeholder='What Pokémon are you looking for?' />
      <Styled.List
        data={pokemons?.slice(0, 10)}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => String(index)}
        renderItem={element => {
          const pokemon = element.item as IPokemon
          return <Card pokemonData={pokemon} />
        }}
      />
    </Styled.Container>
  )
}

export default Home
