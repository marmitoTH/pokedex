const getIDFromUrl = (url: string): number => {
  const re = /https:\/\/pokeapi\.co\/api\/v\d+\/[\w-]+\/(\d+)\/?/
  const matches = url.match(re)
  return matches ? (parseInt(matches[1]) || 0) : 0
}

export default getIDFromUrl
