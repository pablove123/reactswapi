const baseUrl = "https://swapi.dev/api/"

export async function getAllStartships(){
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getStarshipDetails(starshipName) {
  const res = await fetch(`${baseUrl}starships/${starshipName}`)
  return res.json()
}