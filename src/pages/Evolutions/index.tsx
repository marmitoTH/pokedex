import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import * as Styled from './styled'

interface SpecieData {
  evolution_chain: {
    url: string
  }
}

interface EvolutionData {
  evolution_details: {
    item: string
    min_level: number

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
  species_name: string
  min_level: number | null
  trigger_name: string | null
  item: string | null
}

export interface Props {
  pokemonID: number
}

const Evolutions: React.FC<Props> = ({ pokemonID }) => {
  const [evolutions, setEvolutions] = useState<Evolution[]>()

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
          species_name: evoData.species.name,
          min_level: evoData.evolution_details[0]?.min_level,
          trigger_name: evoData.evolution_details[0]?.trigger.name,
          item: evoData.evolution_details[0]?.item
        })

        if (numberOfEvolutions > 1) {
          for (let i = 1; i < numberOfEvolutions; i++) {
            evoChain.push({
              species_name: evoData.evolves_to[i]?.species.name,
              min_level: evoData.evolves_to[i]?.evolution_details[0]?.min_level,
              trigger_name: evoData.evolves_to[i]?.evolution_details[0]?.trigger.name,
              item: evoData.evolves_to[i]?.evolution_details[0]?.item
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
        <Text key={index}>{data.species_name}</Text>
      ))}
    </Styled.Container>
  )
}

export default Evolutions
