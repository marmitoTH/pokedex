import React from 'react'
import loadIcon from '../../utils/loadIcon'
import capitalize from '../../utils/capitalize'
import { Container, Label, Icon } from './styles'

interface Props {
  type: string
  iconOnly?: boolean
}

const TypeCard: React.FC<Props> = ({ type, iconOnly }) => (
  <Container type={type}>
    <Icon source={loadIcon(type)} />
    {iconOnly || <Label>{capitalize(type)}</Label>}
  </Container>
)

export default TypeCard
