interface IPokemon {
  id: number
  name: string
  image: string
  description: string
  height: number
  weight: number
  species: string
  types: string[]

  training: {
    evYield: string

    catchRate: {
      value: number
      text: string
    }

    baseFriendship: {
      value: number
      text: string
    }

    baseExp: number
    growthRate: string
  }

  breedings: {
    eggGroups: string[]

    gender: {
      male: number
      female: number
    }

    eggCycles: {
      value: number
      text: string
    }
  }

  baseStats: {
    hp: number[]
    attack: number[]
    defence: number[]
    specialAttack: number[]
    specialDefence: number[]
    speed: number[]
  }

  typeDefences: {
    normal: number | null
    fire: number | null
    water: number | null
    electric: number | null
    grass: number | null
    ice: number | null
    fighting: number | null
    poison: number | null
    ground: number | null
    flying: number | null
    psychic: number | null
    bug: number | null
    rock: number | null
    ghost: number | null
    dragon: number | null
    darl: number | null
    steel: number | null
    fairy: number | null
  }
}

export default IPokemon
