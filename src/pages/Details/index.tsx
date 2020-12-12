import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import IPokemon from '../../types/IPokemon'
import capitalize from '../../utils/capitalize'
import BackButton from '../../components/BackButton'
import TypeCard from '../../components/TypeCard'
import * as Styled from './styles'

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

      </Styled.Main>
    </Styled.Container>
  )
}

export default Details
