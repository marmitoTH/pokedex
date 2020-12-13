import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import IPokemon from '../../types/IPokemon'
import capitalize from '../../utils/capitalize'
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
          options={['About', 'Base Stats', 'Evolutions', 'Moves']}
          onChange={setSubPageIdx}
        />
        {(() => {
          switch (subPageIdx) {
            default:
            case 0:
              return <About pokemonData={data} />
            case 1:
              return <BaseStats pokemonData={data} />
          }
        })()}
      </Styled.Main>
    </Styled.Container>
  )
}

export default Details
