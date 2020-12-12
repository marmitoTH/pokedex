import React from 'react'
import { useRoute } from '@react-navigation/native'
import IPokemon from '../../types/IPokemon'
import capitalize from '../../utils/capitalize'
import TypeCard from '../../components/TypeCard'
import * as Styled from './styles'

const Details: React.FC = () => {
  const route = useRoute()
  const data = route.params as IPokemon

  return (
    <Styled.Container type={data.types[0]}>
      <Styled.ID>#{String(data.id).padStart(3, '0')}</Styled.ID>
      <Styled.Name>{capitalize(data.name)}</Styled.Name>
      <Styled.Types>
        {data.types.map((type, key) => (
          <TypeCard key={key} type={type} />
        ))}
      </Styled.Types>
    </Styled.Container>
  )
}

export default Details
