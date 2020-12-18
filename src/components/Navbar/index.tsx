import React, { useCallback, useRef } from 'react'
import * as Styled from './styles'

import {
  Animated,
  Dimensions,
  ScrollView,
  StyleProp,
  ViewStyle
} from 'react-native'

export interface Props {
  tabs: {
    name: string
    component: React.ReactNode
  }[]

  indicatorColor?: string
  style?: StyleProp<ViewStyle>
}

const Navbar: React.FC<Props> = ({
  tabs,
  style,
  indicatorColor = '#efefef'
}) => {
  const indicatorX = new Animated.Value(0)
  const scrollRef = useRef<ScrollView | null>(null)
  const screenWidth = Dimensions.get('screen').width

  const moveIndicator = (to: number) => {
    Animated.timing(indicatorX, {
      toValue: to,
      duration: 0,
      useNativeDriver: false
    }).start()
  }

  const handleMenuPress = useCallback((menuIndex: number) => {
    scrollRef.current?.scrollTo({ x: screenWidth * menuIndex })
  }, [screenWidth])

  return (
    <Styled.Container style={style}>
      <Styled.Menu>
        {tabs.map((tab, index) => (
          <Styled.MenuButtom
            key={index}
            onPress={() => handleMenuPress(index)}
          >
            <Styled.ButtonText
              style={{
                color: indicatorX.interpolate({
                  inputRange: [
                    (index - 1) * screenWidth / tabs.length,
                    index * screenWidth / tabs.length,
                    (index + 1) * screenWidth / tabs.length
                  ],
                  outputRange: ['#b8b8b8', '#000', '#b8b8b8'],
                  extrapolate: 'clamp'
                })
              }}
            >
              {tab.name}
            </Styled.ButtonText>
          </Styled.MenuButtom>
        ))}
      </Styled.Menu>
      <Styled.Border />
      <Styled.Indicator
        style={{
          width: screenWidth / tabs.length,
          backgroundColor: indicatorColor,
          transform: [{
            translateX: indicatorX
          }, {
            scaleX: 0.7
          }]
        }}
      />
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        decelerationRate={0.5}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={e => {
          const { contentOffset } = e.nativeEvent
          moveIndicator(contentOffset.x / tabs.length)
        }}
      >
        {tabs.map((tab, index) => (
          <ScrollView key={index}>
            <Styled.Content>
              {tab.component}
            </Styled.Content>
          </ScrollView>
        ))}
      </ScrollView>
    </Styled.Container>
  )
}

export default Navbar
