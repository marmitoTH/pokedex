import React from 'react'
import IPokemon from '../../types/IPokemon'
import GaugeBar from '../../components/GaugeBar'
import getColorFromType from '../../utils/getColorFromType'
import capitalize from '../../utils/capitalize'
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
          fillAmount={pokemonData.baseStats.hp[0] /
            pokemonData.baseStats.hp[2]}
        />
        <Styled.RightText style={{ textAlign: 'right' }}>
          {pokemonData.baseStats.hp[1]}
        </Styled.RightText>
        <Styled.RightText style={{ textAlign: 'right' }}>
          {pokemonData.baseStats.hp[2]}
        </Styled.RightText>
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Attack</Styled.LeftText>
        <Styled.RightText>{pokemonData.baseStats.attack[0]}</Styled.RightText>
        <GaugeBar
          barColor={getColorFromType(pokemonData.types[0])}
          fillAmount={pokemonData.baseStats.attack[0] /
            pokemonData.baseStats.attack[2]}
        />
        <Styled.RightText style={{ textAlign: 'right' }}>
          {pokemonData.baseStats.attack[1]}
        </Styled.RightText>
        <Styled.RightText style={{ textAlign: 'right' }}>
          {pokemonData.baseStats.attack[2]}
        </Styled.RightText>
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Defence</Styled.LeftText>
        <Styled.RightText>{pokemonData.baseStats.defence[0]}</Styled.RightText>
        <GaugeBar
          barColor={getColorFromType(pokemonData.types[0])}
          fillAmount={pokemonData.baseStats.defence[0] /
            pokemonData.baseStats.defence[2]}
        />
        <Styled.RightText style={{ textAlign: 'right' }}>
          {pokemonData.baseStats.defence[1]}
        </Styled.RightText>
        <Styled.RightText style={{ textAlign: 'right' }}>
          {pokemonData.baseStats.defence[2]}
        </Styled.RightText>
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Sp. Attack</Styled.LeftText>
        <Styled.RightText>
          {pokemonData.baseStats.specialAttack[0]}
        </Styled.RightText>
        <GaugeBar
          barColor={getColorFromType(pokemonData.types[0])}
          fillAmount={pokemonData.baseStats.specialAttack[0] /
            pokemonData.baseStats.specialAttack[2]}
        />
        <Styled.RightText style={{ textAlign: 'right' }}>
          {pokemonData.baseStats.specialAttack[1]}
        </Styled.RightText>
        <Styled.RightText style={{ textAlign: 'right' }}>
          {pokemonData.baseStats.specialAttack[2]}
        </Styled.RightText>
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Sp. Defence</Styled.LeftText>
        <Styled.RightText>
          {pokemonData.baseStats.specialDefence[0]}
        </Styled.RightText>
        <GaugeBar
          barColor={getColorFromType(pokemonData.types[0])}
          fillAmount={pokemonData.baseStats.specialDefence[0] /
            pokemonData.baseStats.specialDefence[2]}
        />
        <Styled.RightText style={{ textAlign: 'right' }}>
          {pokemonData.baseStats.specialDefence[1]}
        </Styled.RightText>
        <Styled.RightText style={{ textAlign: 'right' }}>
          {pokemonData.baseStats.specialDefence[2]}
        </Styled.RightText>
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Speed</Styled.LeftText>
        <Styled.RightText>{pokemonData.baseStats.speed[0]}</Styled.RightText>
        <GaugeBar
          barColor={getColorFromType(pokemonData.types[0])}
          fillAmount={pokemonData.baseStats.speed[0] /
            pokemonData.baseStats.speed[2]}
        />
        <Styled.RightText style={{ textAlign: 'right' }}>
          {pokemonData.baseStats.speed[1]}
        </Styled.RightText>
        <Styled.RightText style={{ textAlign: 'right' }}>
          {pokemonData.baseStats.speed[2]}
        </Styled.RightText>
      </Styled.Row>
      <Styled.Row style={{ marginBottom: 0 }}>
        <Styled.LeftText>Total</Styled.LeftText>
        <Styled.RightText style={{ fontWeight: 'bold' }}>
          {pokemonData.baseStats.attack[0] +
            pokemonData.baseStats.defence[0] +
            pokemonData.baseStats.specialAttack[0] +
            pokemonData.baseStats.specialDefence[0] +
            pokemonData.baseStats.speed[0] +
            pokemonData.baseStats.hp[0]}
        </Styled.RightText>
        <Styled.RightText
          style={{
            flex: 1,
            textAlign: 'right',
            fontWeight: 'bold'
          }}
        >
          Min
        </Styled.RightText>
        <Styled.RightText
          style={{
            textAlign: 'right',
            fontWeight: 'bold'
          }}
        >
          Max
        </Styled.RightText>
      </Styled.Row>
      <Styled.Description>
        {'The ranges shown on the right are for a level 100 Pokémon. ' +
          'Maximum values are based on a beneficial nature, 252 EVs, 31 ' +
          'IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVs.'}
      </Styled.Description>
      <Styled.Title color={getColorFromType(pokemonData.types[0])}>
        Type Defenses
      </Styled.Title>
      <Styled.Description style={{ marginTop: 0 }}>
        The effectiveness of each type on {capitalize(pokemonData.name)}.
      </Styled.Description>
    </Styled.Container>
  )
}

export default BaseStats
