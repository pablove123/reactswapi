
import { getAllStartships } from '../services/api-sw-api';
import { useState, useEffect } from 'react';
import StarshipCard from '../components/StarshipCard';
import { Link } from 'react-router-dom';
import './Starships.css'


function Starships() {
  const [starships, setStarships] = useState([])

  useEffect(()=> {
    const fetchMonsterList = async () => {
      const starshipData = await getAllStartships()
      setStarships(starshipData.results)
    }
    fetchMonsterList()
  }, [])


  return (
  <>
  <br/>
    {starships.length ?
    <>
    {starships.map((starship, idx) => 
            
            <div id="name"
           key={starship[idx]}>
              <Link  to="/starship" state={{starship}}> {starship.name} </Link>
            </div>  
          )}
    </>
  :
      <h3>Loading...</h3>
  }
  </>
  );
}

export default Starships;