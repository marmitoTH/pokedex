import React, { useEffect } from 'react'
import { Animated } from 'react-native'
import { Container, Button, Icon, Title } from './styles'

interface Props {
  title: string
  showTitle?: boolean
  onBackButtonPressed(): void
}

const Header: React.FC<Props> = (props) => {
  const opacity = new Animated.Value(1)

  useEffect(() => {
    opacity.setValue(props.showTitle ? 0 : 1)

    Animated.timing(opacity, {
      toValue: props.showTitle ? 1 : 0,
      duration: 300,
      useNativeDriver: false
    }).start()
  }, [props.showTitle])

  return (
    <Container>
      <Button onPress={() => props.onBackButtonPressed()}>
        <Icon name='arrow-left' />
      </Button>
      <Title style={{ opacity }}>{props.title}</Title>
    </Container>
  )
}

export default Header
