interface IPokemon {
  id: number
  name: string
  image: string
  description: string
  height: number
  weight: number
  species: string
  types: string[]
}

export default IPokemon
