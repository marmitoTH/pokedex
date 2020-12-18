import styled, { css } from 'styled-components/native'
import { Animated, Dimensions } from 'react-native'

export const Container = styled.View`
  flex: 1;
`

export const Menu = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`

export const Indicator = styled(Animated.View)`
  height: 3px;
  margin-bottom: -3px;
`

export const Border = styled.View`
  height: 3px;
  margin-bottom: -3px;
  background-color: rgba(200, 200, 200, 0.1);
  transform: scaleX(0.9);
`

export const MenuButtom = styled.TouchableOpacity`
  flex: 1;
  height: 50px;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled(Animated.Text)``

export const Content = styled.View`
  width: ${Dimensions.get('screen').width}px;
`
