import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getStarshipDetails } from '../services/api-sw-api';
import { useLocation } from 'react-router-dom';
import './StarshipsDetails.css'
import { Link } from 'react-router-dom';

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()


  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarshipDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [location.state.starship.url])

  return ( 
    <>
    <main>
      <section>
      <h1>Starship Details</h1>
      <h2>Name: {starshipDetails.name}</h2>
      <h2>Passengers: {starshipDetails.passengers}</h2>
      <h3>Length: {starshipDetails.length}</h3>
      <br/>
      <Link to="/starships">Return</Link>

      </section>
    </main>
    </>
   );
}
 
export default StarshipDetails;