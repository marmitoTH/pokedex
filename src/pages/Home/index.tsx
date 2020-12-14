import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'
import IPokemon from '../../types/IPokemon'
import SearchBar from '../../components/SearchBar'
import Card from '../../components/Card'
import * as Styled from './styles'

const Home: React.FC = () => {
  const navigation = useNavigation()
  const [pokemons, setPokemons] = useState<IPokemon[]>()
  const [pokemonsSearch, setPokemonsSearch] = useState<IPokemon[]>()
  const pokeball = require('../../assets/images/pokeball/pokeball.png')

  const handleSearch = (query: string) => {
    if (query && pokemons) {
      const matches = pokemons?.filter(({ id, name }) => (
        (id.toString() === query) || name.includes(query.toLowerCase())
      ))

      if (matches) {
        setPokemonsSearch(matches)
      }
    } else {
      setPokemonsSearch(undefined)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const pokemons = await AsyncStorage.getItem('@pokedex/pokemons')

      if (pokemons) {
        setPokemons(JSON.parse(pokemons))
        return
      }

      await api.get<IPokemon[]>('/').then(async response => {
        const pokemons = response.data
        await AsyncStorage.setItem('@pokedex/pokemons',
          JSON.stringify(pokemons))
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
      <SearchBar
        style={{ marginTop: 25 }}
        placeholder='What Pokémon are you looking for?'
        onChangeText={handleSearch}
      />
      <Styled.List
        data={pokemonsSearch || pokemons}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => String(index)}
        renderItem={element => {
          const pokemon = element.item as IPokemon
          return <Card
            pokemonData={pokemon}
            onPress={() => navigation.navigate('Details', pokemon)}
          />
        }}
      />
      <StatusBar style='dark' />
    </Styled.Container>
  )
}

export default Home
