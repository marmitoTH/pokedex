import React, { useEffect, useState } from 'react'
import { Animated, Dimensions, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import api from '../../services/api'
import getColor from '../../utils/getColor'
import capitalize from '../../utils/capitalize'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Pokemon, { PokemonProps } from '../../components/Pokemon'
import { Container, Content, ContentHeader, Borders } from './styles'

import About from '../../pages/About'
import Stats from '../../pages/Stats'
import Evolution from '../../pages/Evolution'

const MAX_HEADER_HEIGHT = 360
const MIN_HEADER_HEIGHT = 160

const Profile: React.FC = () => {
  const [pokemon, setPokemon] = useState<PokemonProps>()
  const [showHeaderTitle, setShowHeaderTitle] = useState(false)
  const [showPokemon, setShowPokemon] = useState(true)
  const [selectedTab, setSelectedTab] = useState(0)
  const minContentHeight = Dimensions.get('screen').height + MIN_HEADER_HEIGHT
  const scrollY = new Animated.Value(0)

  const tabs = [{
    name: 'About',
    component: About
  }, {
    name: 'Stats',
    component: Stats
  }, {
    name: 'Evolution',
    component: Evolution
  }]

  const height = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
    extrapolate: 'clamp'
  })

  const setHeaderTitleVisibility = (value: boolean) => {
    if (showHeaderTitle !== value) {
      setShowHeaderTitle(value)
    }
  }

  const setPokemonVisibility = (value: boolean) => {
    if (showPokemon !== value) {
      setShowPokemon(value)
    }
  }

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = e.nativeEvent.contentOffset.y
    setHeaderTitleVisibility(offsetY >= 100)
    setPokemonVisibility(offsetY < 100)
    scrollY.setValue(offsetY)
  }

  const drawContent = () => {
    for (let i = 0; i < tabs.length; i++) {
      if (i === selectedTab) {
        return tabs[i].component
      }
    }

    return tabs[0].component
  }

  useEffect(() => {
    const fetch = async () => {
      const pokemon = await api.get<PokemonProps>(`/pokemon/${1}`)
      setPokemon(pokemon.data)
    }

    fetch()
  }, [])

  return (
    <>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={handleScroll}
      >
        <Content
          paddingTop={MAX_HEADER_HEIGHT}
          minHeight={minContentHeight}
        >
          {React.createElement(drawContent())}
        </Content>
      </Animated.ScrollView>
      <Container
        style={{ height }}
        type={pokemon?.types[0].type.name || ''}
      >
        {pokemon && <Pokemon
          data={pokemon}
          isVisible={showPokemon}
        />}
        <ContentHeader>
          <Navbar
            options={tabs.map(tab => tab.name)}
            onSelect={id => setSelectedTab(id)}
          />
          <Borders />
        </ContentHeader>
      </Container>
      <Header
        title={capitalize(pokemon?.name || '')}
        showTitle={showHeaderTitle}
        onBackButtonPressed={() => { }}
      />
      <StatusBar
        style='light'
        translucent={false}
        backgroundColor={getColor(pokemon?.types[0].type.name || '')}
      />
    </>
  )
}

export default Profile
