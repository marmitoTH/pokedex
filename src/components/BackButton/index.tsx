import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import * as Styled from './styles'

type Props = TouchableOpacityProps

const BackButton: React.FC<Props> = ({ children, ...rest }) => (
  <Styled.Button {...rest}>
    <Styled.BackIcon name='arrow-back' />
    {children}
  </Styled.Button>
)

export default BackButton
