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
}

export default IPokemon
