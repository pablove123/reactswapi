import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getStarshipDetails } from '../services/api-sw-api';

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipName } = useParams()

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarshipDetails(starshipName)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [starshipName])

  return ( 
    <>
    <h1>Starship Details</h1>
    <h2>{starshipDetails.name}</h2>
    </>
   );
}
 
export default StarshipDetails;