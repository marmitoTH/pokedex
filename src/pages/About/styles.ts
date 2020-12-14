import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 20px 40px;
`

export const Row = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`

export const Description = styled.Text`
  color: #747476;
  font-size: 12px;
  margin-bottom: 10px;
`

export const Title = styled.Text<{ color: string }>`
  margin: 20px 0;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.color};
`

export const LeftText = styled.Text`
  color: #000;
  width: 120px;
  font-size: 12px;
  font-weight: bold;
`

export const RightText = styled.Text`
  color: #747476;
`
