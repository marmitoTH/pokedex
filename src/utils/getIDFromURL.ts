const getIDFromURL = (url: string): number => {
  const pattern = /^https:\/\/pokeapi\.co\/api\/v\d\/[\w-]+\/(\d+)\/$/
  const match = url.match(pattern)

  if (match) {
    return parseInt(match[1])
  }

  return 0
}

export default getIDFromURL
