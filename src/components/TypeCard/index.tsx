import React from 'react'
import * as Styled from './styles'

export interface TypeCardProps {
  type: string
}

const TypeCard: React.FC<TypeCardProps> = ({ type }) => (
  <Styled.Container>
    <Styled.Type>{type}</Styled.Type>
  </Styled.Container>
)

export default TypeCard
