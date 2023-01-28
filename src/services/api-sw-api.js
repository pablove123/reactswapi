const baseUrl = "https://swapi.dev/api/"

export async function getAllStartships(){
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getStarshipDetails(starshipUrl) {
  const res = await fetch(`${starshipUrl}`)
  return res.json()
}