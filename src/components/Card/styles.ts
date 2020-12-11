import styled from 'styled-components/native'

export const Container = styled.View`
  height: 115px;
  padding: 20px;
  overflow: hidden;
  margin-bottom: 15px;
  border-radius: 10px;
  background: #ea5d60;
`

export const Name = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`

export const Pokemon = styled.Image`
  width: 100px;
  height: 100px;
  position: absolute;
  right: 10px;
  bottom: 5px;
`

export const Pokeball = styled.Image`
  opacity: 0.1;
  width: 125px;
  height: 125px;
  position: absolute;
  right: -10px;
  bottom: -15px;
  tint-color: #fff;
`