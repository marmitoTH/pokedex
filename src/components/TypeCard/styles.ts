import styled from 'styled-components/native'
import getColor from '../../utils/getColor'

export const Container = styled.View<{ type: string }>`
  padding: 5px;
  margin-right: 5px;
  border-radius: 3px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${props => getColor(props.type)};
`

export const Label = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-left: 5px;
`

export const Icon = styled.Image`
  width: 12px;
  height: 12px;
  tint-color: #fff;
`
