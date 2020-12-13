import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`

export const Button = styled.TouchableOpacity`
  flex: 1;
  height: 60px;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text<{ selected?: boolean }>`
  color: #747476;

  ${({ selected }) => selected && css`
    color: #000;
    font-weight: bold;
  `}
`

export const Border = styled.View<{ selected?: boolean, selectionColor?: string }>`
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
  opacity: ${props => props.selected && 1 || 0.5};
  background: ${props => props.selected && props.selectionColor || '#efefef'};
`
