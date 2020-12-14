import React from 'react'
import { StatusBar } from 'expo-status-bar'
import IPokemon from '../../types/IPokemon'
import capitalize from '../../utils/capitalize'
import getColorFromType from '../../utils/getColorFromType'
import * as Styled from './styles'

export interface Props {
  pokemonData: IPokemon
}

const About: React.FC<Props> = ({ pokemonData }) => {
  return (
    <Styled.Container>
      <Styled.Description>
        {pokemonData.description}
      </Styled.Description>
      <Styled.Title color={getColorFromType(pokemonData.types[0])}>
        Pokédex Data
      </Styled.Title>
      <Styled.Row>
        <Styled.LeftText>Species</Styled.LeftText>
        <Styled.RightText>{pokemonData.species}</Styled.RightText>
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Height</Styled.LeftText>
        <Styled.RightText>{pokemonData.height}m</Styled.RightText>
      </Styled.Row>
      <Styled.Row style={{ marginBottom: 0 }}>
        <Styled.LeftText>Weight</Styled.LeftText>
        <Styled.RightText>{pokemonData.weight}Kg</Styled.RightText>
      </Styled.Row>
      <Styled.Title color={getColorFromType(pokemonData.types[0])}>
        Training
      </Styled.Title>
      <Styled.Row>
        <Styled.LeftText>EV Yield</Styled.LeftText>
        <Styled.RightText>{pokemonData.training.evYield}</Styled.RightText>
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Catch Rate</Styled.LeftText>
        <Styled.RightText>{pokemonData.training.catchRate.value}</Styled.RightText>
        <Styled.RightText>{pokemonData.training.catchRate.text}</Styled.RightText>
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Base Friendship</Styled.LeftText>
        <Styled.RightText>{pokemonData.training.baseFriendship.value}</Styled.RightText>
        <Styled.RightText> ({pokemonData.training.baseFriendship.text})</Styled.RightText>
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Base Exp</Styled.LeftText>
        <Styled.RightText>{pokemonData.training.baseExp}</Styled.RightText>
      </Styled.Row>
      <Styled.Row style={{ marginBottom: 0 }}>
        <Styled.LeftText>Growth Rate</Styled.LeftText>
        <Styled.RightText>{pokemonData.training.growthRate}</Styled.RightText>
      </Styled.Row>
      <Styled.Title color={getColorFromType(pokemonData.types[0])}>
        Breeding
      </Styled.Title>
      <Styled.Row>
        <Styled.LeftText>Gender</Styled.LeftText>
        <Styled.RightText
          style={{
            color: '#748fc9',
            marginRight: 15
          }}
        >
          ♂ {pokemonData.breedings.gender.male}%
        </Styled.RightText>
        <Styled.RightText
          style={{
            color: '#f3a4dc'
          }}
        >
          ♀ {pokemonData.breedings.gender.female}%
        </Styled.RightText>
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Egg Groups</Styled.LeftText>
        {pokemonData.breedings.eggGroups.map((group, key, array) => (
          <Styled.RightText key={key}>
            {capitalize(group) + ((key + 1 < array.length) ? ', ' : '')}
          </Styled.RightText>
        ))}
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Egg Cycles</Styled.LeftText>
        <Styled.RightText style={{ minWidth: 25 }}>
          {pokemonData.breedings.eggCycles.value}
        </Styled.RightText>
        <Styled.RightText>
          ({pokemonData.breedings.eggCycles.text})
        </Styled.RightText>
      </Styled.Row>
      <StatusBar style='light' />
    </Styled.Container>
  )
}

export default About
