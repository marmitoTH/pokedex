import React from 'react'
import IPokemon from '../../types/IPokemon'
import GaugeBar from '../../components/GaugeBar'
import getColorFromType from '../../utils/getColorFromType'
import * as Styled from './styles'

export interface Props {
  pokemonData: IPokemon
}

const BaseStats: React.FC<Props> = ({ pokemonData }) => {
  return (
    <Styled.Container>
      <Styled.Row>
        <Styled.LeftText>HP</Styled.LeftText>
        <Styled.RightText>{pokemonData.baseStats.hp[0]}</Styled.RightText>
        <GaugeBar
          barColor={getColorFromType(pokemonData.types[0])}
          fillAmount={pokemonData.baseStats.hp[0] / pokemonData.baseStats.hp[2]}
        />
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Attack</Styled.LeftText>
        <Styled.RightText>{pokemonData.baseStats.attack[0]}</Styled.RightText>
        <GaugeBar
          barColor={getColorFromType(pokemonData.types[0])}
          fillAmount={pokemonData.baseStats.attack[0] / pokemonData.baseStats.attack[2]}
        />
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Defence</Styled.LeftText>
        <Styled.RightText>{pokemonData.baseStats.defence[0]}</Styled.RightText>
        <GaugeBar
          barColor={getColorFromType(pokemonData.types[0])}
          fillAmount={pokemonData.baseStats.defence[0] / pokemonData.baseStats.defence[2]}
        />
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Sp. Attack</Styled.LeftText>
        <Styled.RightText>{pokemonData.baseStats.specialAttack[0]}</Styled.RightText>
        <GaugeBar
          barColor={getColorFromType(pokemonData.types[0])}
          fillAmount={pokemonData.baseStats.specialAttack[0] / pokemonData.baseStats.specialAttack[2]}
        />
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Sp. Defence</Styled.LeftText>
        <Styled.RightText>{pokemonData.baseStats.specialDefence[0]}</Styled.RightText>
        <GaugeBar
          barColor={getColorFromType(pokemonData.types[0])}
          fillAmount={pokemonData.baseStats.specialDefence[0] / pokemonData.baseStats.specialDefence[2]}
        />
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Speed</Styled.LeftText>
        <Styled.RightText>{pokemonData.baseStats.speed[0]}</Styled.RightText>
        <GaugeBar
          barColor={getColorFromType(pokemonData.types[0])}
          fillAmount={pokemonData.baseStats.speed[0] / pokemonData.baseStats.speed[2]}
        />
      </Styled.Row>
    </Styled.Container>
  )
}

export default BaseStats
