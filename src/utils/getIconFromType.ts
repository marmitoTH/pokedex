const getIconFromType = (type: string) => {
  switch (type) {
    default:
    case 'bug':
      return require('../assets/images/icons/bug.png')
    case 'dark':
      return require('../assets/images/icons/dark.png')
    case 'dragon':
      return require('../assets/images/icons/dragon.png')
    case 'electric':
      return require('../assets/images/icons/electric.png')
    case 'fairy':
      return require('../assets/images/icons/fairy.png')
    case 'fighting':
      return require('../assets/images/icons/fighting.png')
    case 'fire':
      return require('../assets/images/icons/fire.png')
    case 'flying':
      return require('../assets/images/icons/flying.png')
    case 'ghost':
      return require('../assets/images/icons/ghost.png')
    case 'grass':
      return require('../assets/images/icons/grass.png')
    case 'ground':
      return require('../assets/images/icons/ground.png')
    case 'ice':
      return require('../assets/images/icons/ice.png')
    case 'normal':
      return require('../assets/images/icons/normal.png')
    case 'poison':
      return require('../assets/images/icons/poison.png')
    case 'psychic':
      return require('../assets/images/icons/psychic.png')
    case 'rock':
      return require('../assets/images/icons/rock.png')
    case 'steel':
      return require('../assets/images/icons/steel.png')
    case 'water':
      return require('../assets/images/icons/water.png')
  }
}

export default getIconFromType
