import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import api from '../../services/api'
import getIDFromURL from '../../utils/getIDFromURL'
import { Container, Background, Title, Description, Input, List, Element } from './styles'
import Card from '../../components/Card'
import pokeballBg from '../../assets/images/pokeball-bg.png'

interface BaseData {
  results: {
    name: string
    url: string
  }[]
}

const Home = () => {
  const [baseData, setBaseData] = useState<BaseData>()

  useEffect(() => {
    const fetch = async () => {
      const baseData = await api.get<BaseData>('/pokemon')
      setBaseData(baseData.data)
    }

    fetch()
  })

  return (
    <ScrollView>
      <Container>
        <Background source={pokeballBg} />
        <Title>Pokémon</Title>
        <Description>Search fro Pokémon by name or using the National Pokédex number.</Description>
        <Input placeholder='What Pokémon are you looking for?' />
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
