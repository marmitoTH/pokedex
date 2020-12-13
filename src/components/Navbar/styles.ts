import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Button = styled.TouchableOpacity`
  flex: 1;
  height: 50px;
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

export const Border = styled.View<{ selected?: boolean }>`
  width: 100%;
  height: 2px;
  opacity: 0.5;
  background: #efefef;
  position: absolute;
  bottom: 0;

  ${({ selected }) => selected && css`
    opacity: 1;
    background: #6c79db;
  `}
`
