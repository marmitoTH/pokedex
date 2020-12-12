const getColorFromType = (type: string) => {
  switch (type) {
    default:
      return '#000'
    case 'bug':
      return '#8BD674'
    case 'dark':
      return '#6F6E78'
    case 'dragon':
      return '#7383B9'
    case 'electric':
      return '#ffd86f'
    case 'fairy':
      return '#EBA8C3'
    case 'fighting':
      return '#EB4971'
    case 'fire':
      return '#fb6c6c'
    case 'flying':
      return '#83A2E3'
    case 'ghost':
      return '#8571BE'
    case 'grass':
      return '#48d0b0'
    case 'ground':
      return '#F78551'
    case 'ice':
      return '#91D8DF'
    case 'normal':
      return '#B5B9C4'
    case 'poison':
      return '#9F6E97'
    case 'psychic':
      return '#FF6568'
    case 'rock':
      return '#D4C294'
    case 'steel':
      return '#4C91B2'
    case 'water':
      return '#76bdfe'
  }
}

export default getColorFromType
