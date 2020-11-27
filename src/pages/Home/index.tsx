import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import api from '../../services/api'
import getIDFromURL from '../../utils/getIDFromURL'
import SearchBar from '../../components/SearchBar'
import Card from '../../components/Card'
import pokeballBg from '../../assets/images/pokeball-bg.png'

import {
  Container,
  Background,
  Title,
  Description,
  List,
  Element
} from './styles'

interface BaseData {
  results: {
    name: string
    url: string
  }[]
}

interface Pokemon {
  id: number
  name: string
}

const Home: React.FC = () => {
  const [baseData, setBaseData] = useState<BaseData>()

  const loadList = async () => {
    const baseData = await api.get<BaseData>('/pokemon')
    setBaseData(baseData.data)
  }

  const search = async (query: string) => {
    if (query.length === 0) {
      loadList()
      return
    }

    api.get<Pokemon>(`/pokemon/${query}`)
      .then(response => {
        const { id, name } = response.data

        setBaseData({
          results: [{
            name,
            url: `https://pokeapi.co/api/v2/pokemon/${id}/`
          }]
        })
      }).catch(() => {
        setBaseData(undefined)
      })
  }

  useEffect(() => {
    loadList()
  }, [])

  return (
    <ScrollView>
      <Container>
        <Background source={pokeballBg} />
        <Title>Pokémon</Title>
        <Description>
          Search fro Pokémon by name or using the National Pokédex number.
        </Description>
        <SearchBar
          placeholder='What Pokémon are you looking for?'
          onSearch={search}
        />
        <List>
          {baseData?.results.map((value, key) => {
            const id = getIDFromURL(value.url)
            return (
              <Element key={key}>
                <Card
                  id={id}
                  name={value.name}
                />
              </Element>
            )
          })}
        </List>
      </Container>
    </ScrollView>
  )
}

export default Home
