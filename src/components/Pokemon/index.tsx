import React, { useEffect } from 'react'
import { Animated, View } from 'react-native'
import capitalize from '../../utils/capitalize'
import TypeCard from '../TypeCard'
import { Container, ID, Name, Types, Artwork, ArtworkImg, ArtworkBG } from './styles'
import circle from '../../assets/images/circle/circle.png'

export interface PokemonProps {
  id: number
  name: string
  types: {
    type: {
      name: string
    }
  }[]
}

interface Props {
  data: PokemonProps
  isVisible?: boolean
}

const Pokemon: React.FC<Props> = ({ data, isVisible }) => {
  const opacity = new Animated.Value(1)

  useEffect(() => {
    opacity.stopAnimation()
    opacity.setValue(isVisible ? 0 : 1)

    Animated.timing(opacity, {
      toValue: isVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: false
    }).start()
  }, [isVisible])

  return (
    <>
      <Container style={{ opacity }}>
        <View>
          <ID>#{`${data.id}`.padStart(3, '0')}</ID>
          <Name>{capitalize(data.name)}</Name>
          <Types>
            {data.types.map((type, key) => (
              <TypeCard
                key={key}
                type={type.type.name}
              />
            ))}
          </Types>
        </View>
        <Artwork>
          <ArtworkBG source={circle} />
          <ArtworkImg
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/` +
                `master/sprites/pokemon/other/official-artwork/${data.id}.png`
            }}
          />
        </Artwork>
      </Container>
    </>
  )
}

export default Pokemon
