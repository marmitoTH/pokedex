import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import IPokemon from '../../types/IPokemon'
import capitalize from '../../utils/capitalize'
import getColorFromType from '../../utils/getColorFromType'
import BackButton from '../../components/BackButton'
import TypeCard from '../../components/TypeCard'
import Navbar from '../../components/Navbar'
import * as Styled from './styles'

import About from '../About'
import BaseStats from '../BaseStats'

const Details: React.FC = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const data = route.params as IPokemon
  const [subPageIdx, setSubPageIdx] = useState(0)
  const pokeball = require('../../assets/images/pokeball/pokeball.png')

  return (
    <Styled.Container type={data.types[0]}>
      <Styled.Navbar>
        <BackButton onPress={navigation.goBack} />
      </Styled.Navbar>
      <Styled.Header>
        <Styled.ID>#{String(data.id).padStart(3, '0')}</Styled.ID>
        <Styled.Name>{capitalize(data.name)}</Styled.Name>
        <Styled.Types>
          {data.types.map((type, key) => (
            <TypeCard key={key} type={type} />
          ))}
        </Styled.Types>
        <Styled.Pokeball source={pokeball} />
        <Styled.Pokemon source={{ uri: data.image }} />
      </Styled.Header>
      <Styled.Main>
        <Navbar
          style={{ marginTop: 40 }}
          selectionColor={getColorFromType(data.types[0])}
          options={['About', 'Stats', 'Evolutions']}
          onChange={setSubPageIdx}
        />
        <ScrollView>
          {(() => {
            switch (subPageIdx) {
              default:
              case 0:
                return <About pokemonData={data} />
              case 1:
                return <BaseStats pokemonData={data} />
            }
          })()}
        </ScrollView>
      </Styled.Main>
      <StatusBar style='light' />
    </Styled.Container>
  )
}

export default Details
