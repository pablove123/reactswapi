import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getStarshipDetails } from '../services/api-sw-api';
import { useLocation } from 'react-router-dom';

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()
  const { starshipIdx } = useParams()

  console.log(location.state.starship.url)

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarshipDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [starshipIdx])

  return ( 
    <>
    <h1>Starship Details</h1>
    <h2>{starshipDetails.name}</h2>
    </>
   );
}
 
export default StarshipDetails;