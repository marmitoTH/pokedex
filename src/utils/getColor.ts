const getColor = (type: string) => {
  switch (type) {
    default:
    case 'bug':
      return '#8CB330'
    case 'dark':
      return '#58575F'
    case 'dragon':
      return '#0F6AC0'
    case 'electric':
      return '#EED535'
    case 'fairy':
      return '#ED6EC7'
    case 'fighting':
      return '#D04164'
    case 'fire':
      return '#FD7D24'
    case 'flying':
      return '#748FC9'
    case 'ghost':
      return '#556AAE'
    case 'grass':
      return '#62B957'
    case 'ground':
      return '#DD7748'
    case 'ice':
      return '#61CEC0'
    case 'normal':
      return '#9DA0AA'
    case 'poison':
      return '#A552CC'
    case 'psychic':
      return '#EA5D60'
    case 'rock':
      return '#BAAB82'
    case 'steel':
      return '#417D9A'
    case 'water':
      return '#4A90DA'
  }
}

export default getColor
