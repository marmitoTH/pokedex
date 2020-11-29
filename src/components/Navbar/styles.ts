import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  height: 50px;
  flex-direction: row;
`

export const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const Label = styled.Text<{ selected: boolean }>`
  color: #fff;
  font-size: 16px;
  text-align: center;
  opacity: 0.5;

  ${props => props.selected && css`
    opacity: 1;
    font-weight: bold;
  `}
`

export const Background = styled.Image`
  position: absolute;
  transform: translateY(27px);
`
