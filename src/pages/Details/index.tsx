import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation, useRoute } from '@react-navigation/native'
import IPokemon from '../../types/IPokemon'
import capitalize from '../../utils/capitalize'
import getColorFromType from '../../utils/getColorFromType'
import BackButton from '../../components/BackButton'
import TypeCard from '../../components/TypeCard'
import Navbar from '../../components/Navbar'
import * as Styled from './styles'

import {
  createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs'

import About from '../About'
import BaseStats from '../BaseStats'
import Evolutions from '../Evolutions'

const Tab = createMaterialTopTabNavigator()

const Details: React.FC = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const data = route.params as IPokemon
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
          tabs={[{
            name: 'About',
            component: <About pokemonData={data} />
          }, {
            name: 'Stats',
            component: <BaseStats pokemonData={data} />
          }, {
            name: 'Evolutions',
            component: <Evolutions pokemonID={data.id} />
          }]}
          style={{ marginTop: 40 }}
          indicatorColor={getColorFromType(data.types[0])}
        />
      </Styled.Main>
      <StatusBar style='light' />
    </Styled.Container>
  )
}

export default Details
