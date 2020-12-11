import styled from 'styled-components/native'

export const Container = styled.View`
  height: 115px;
  padding: 20px;
  overflow: hidden;
  margin-bottom: 15px;
  border-radius: 10px;
  background: #ea5d60;
`

export const ID = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: rgba(23, 23, 27, 0.5);
`

export const Name = styled.Text`
  color: #fff;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bold;
`

export const Types = styled.View`
  flex-direction: row;
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
