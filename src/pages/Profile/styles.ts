import styled from 'styled-components/native'
import { Animated } from 'react-native'
import getBackgroundColor from '../../utils/getBackgroundColor'

export const Container = styled(Animated.View) <{ type: string }>`
  width: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  background: ${props => getBackgroundColor(props.type)};
`

export const Content = styled.View<{ paddingTop: number, minHeight: number }>`
  padding: 40px;
  background: #fff;
  padding-top: ${props => props.paddingTop}px;
  min-height: ${props => props.minHeight}px;
`

export const ContentHeader = styled.View`
  width: 100%;
  bottom: 0px;
  position: absolute;
`

export const Borders = styled.View`
  width: 100%;
  height: 40px;
  background: #fff;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`
