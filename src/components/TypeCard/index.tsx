import React from 'react'
import capitalize from '../../utils/capitalize'
import * as Styled from './styles'

export interface TypeCardProps {
  type: string
}

const TypeCard: React.FC<TypeCardProps> = ({ type }) => (
  <Styled.Container>
    <Styled.Type>{capitalize(type)}</Styled.Type>
  </Styled.Container>
)

export default TypeCard
