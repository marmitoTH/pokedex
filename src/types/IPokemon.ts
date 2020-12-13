interface IPokemon {
  id: number
  name: string
  image: string
  description: string
  height: number
  weight: number
  species: string
  types: string[]

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
}

export default IPokemon
