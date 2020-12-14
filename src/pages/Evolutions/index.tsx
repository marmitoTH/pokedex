import React, { useEffect, useState } from 'react'
import capitalize from '../../utils/capitalize'
import getIDFromUrl from '../../utils/getIDFromUrl'
import * as Styled from './styled'

interface SpecieData {
  evolution_chain: {
    url: string
  }
}

interface EvolutionData {
  evolution_details: {
    min_level: number

    item: {
      name: string
    }

    trigger: {
      name: string
    }
  }[]

  evolves_to: EvolutionData[]

  species: {
    name: string
    url: string
  }
}

interface EvolutionChain {
  chain: EvolutionData
}

interface Evolution {
  id: number
  species_name: string
  min_level: number | null
  trigger_name: string | null
  item_name: string | null
}

export interface Props {
  pokemonID: number
}

const Evolutions: React.FC<Props> = ({ pokemonID }) => {
  const [evolutions, setEvolutions] = useState<Evolution[]>()
  const pokeball = require('../../assets/images/pokeball/pokeball.png')

  useEffect(() => {
    const fetchData = async () => {
      const specieRequest = await fetch('https://pokeapi.co/api/v2/' +
        `pokemon-species/${pokemonID}`)
      const specieData = (await specieRequest.json()) as SpecieData
      const chainRequest = await fetch(specieData.evolution_chain.url)
      const chainData = (await chainRequest.json()) as EvolutionChain

      const evoChain: Evolution[] = []
      let evoData = chainData.chain

      do {
        let numberOfEvolutions = evoData.evolves_to.length

        evoChain.push({
          id: getIDFromUrl(evoData.species.url),
          species_name: evoData.species.name,
          min_level: evoData.evolution_details[0]?.min_level,
          trigger_name: evoData.evolution_details[0]?.trigger.name,
          item_name: evoData.evolution_details[0]?.item?.name
        })

        if (numberOfEvolutions > 1) {
          for (let i = 1; i < numberOfEvolutions; i++) {
            evoChain.push({
              id: getIDFromUrl(evoData.evolves_to[i]?.species.url),
              species_name: evoData.evolves_to[i]?.species.name,
              min_level: evoData.evolves_to[i]?.evolution_details[0]?.min_level,
              trigger_name: evoData.evolves_to[i]?.evolution_details[0]?.trigger.name,
              item_name: evoData.evolves_to[i]?.evolution_details[0]?.item?.name
            })
          }
        }

        evoData = evoData.evolves_to[0];
      } while (!!evoData && evoData.evolves_to)

      setEvolutions(evoChain)
    }

    fetchData()
  }, [])

  return (
    <Styled.Container>
      {evolutions?.map((data, index) => (
        <Styled.Evolution key={index}>
          <Styled.Pokemon
            source={{
              uri: 'https://raw.githubusercontent.com/' +
                'PokeAPI/sprites/master/sprites/pokemon/' +
                `other/official-artwork/${data.id}.png`
            }}
          />
          <Styled.ID>#{String(data.id).padStart(3, '0')}</Styled.ID>
          <Styled.Name>{capitalize(data.species_name)}</Styled.Name>
          {data.min_level && <Styled.Detail>
            (Level {data.min_level})
          </Styled.Detail>}
          {data.item_name && <Styled.Detail>
            ({capitalize(data.item_name)})
          </Styled.Detail>}
          <Styled.Pokeball source={pokeball} />
        </Styled.Evolution>
      ))}
    </Styled.Container>
  )
}

export default Evolutions
