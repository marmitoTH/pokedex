const getColorFromType = (type: string) => {
  switch (type) {
    case 'bug':
      return '#8BD674'
    case 'dark':
      return '#6F6E78'
    case 'dragon':
      return '#7383B9'
    case 'eletric':
      return '#F2CB55'
    case 'fairy':
      return '#EBA8C3'
    case 'fighting':
      return '#EB4971'
    case 'fire':
      return '#FFA756'
    case 'flying':
      return '#83A2E3'
    case 'ghost':
      return '#8571BE'
    case 'grass':
      return '#8BBE8A'
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
      return '#58ABF6'
  }
}

export default getColorFromType
