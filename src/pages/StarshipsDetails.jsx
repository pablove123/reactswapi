import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getStarshipDetails } from '../services/api-sw-api';

const StarshipDetails = (props) => {
  const [StarshipDetails, setStarshipDetails] = useState({})
  const {starshipName} = useParams()

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
    <h2>{StarshipDetails.name}</h2>
    </>
   );
}
 
export default StarshipDetails;