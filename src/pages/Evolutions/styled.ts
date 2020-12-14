import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 40px;
`

export const Evolution = styled.View`
  align-items: center;
  margin-bottom: 35px;
`

export const Pokemon = styled.Image`
  width: 150px;
  height: 150px;
`

export const ID = styled.Text`
  color: #747476;
  margin-top: 10px;
`

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

export const Detail = styled.Text`
  color: #000;
  font-size: 12px;
`

export const Pokeball = styled.Image`
  width: 150px;
  height: 150px;
  position: absolute;
  z-index: -1;
  opacity: 0.035;
`
