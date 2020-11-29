const loadIcon = (type: string) => {
  switch (type) {
    default:
    case 'bug':
      return require('../assets/images/Icon/Bug/Vector.png')
    case 'dark':
      return require('../assets/images/Icon/Dark/Vector.png')
    case 'dragon':
      return require('../assets/images/Icon/Dragon/Vector.png')
    case 'electric':
      return require('../assets/images/Icon/Electric/Vector.png')
    case 'fairy':
      return require('../assets/images/Icon/Fairy/Vector.png')
    case 'fighting':
      return require('../assets/images/Icon/Fighting/Vector.png')
    case 'fire':
      return require('../assets/images/Icon/Fire/Vector.png')
    case 'flying':
      return require('../assets/images/Icon/Flying/Vector.png')
    case 'ghost':
      return require('../assets/images/Icon/Ghost/Vector.png')
    case 'grass':
      return require('../assets/images/Icon/Grass/Vector.png')
    case 'ground':
      return require('../assets/images/Icon/Ground/Vector.png')
    case 'ice':
      return require('../assets/images/Icon/Ice/Vector.png')
    case 'normal':
      return require('../assets/images/Icon/Normal/Vector.png')
    case 'poison':
      return require('../assets/images/Icon/Poison/Vector.png')
    case 'psychic':
      return require('../assets/images/Icon/Psychic/Vector.png')
    case 'rock':
      return require('../assets/images/Icon/Rock/Vector.png')
    case 'steel':
      return require('../assets/images/Icon/Steel/Vector.png')
    case 'water':
      return require('../assets/images/Icon/Water/Vector.png')
  }
}

export default loadIcon
