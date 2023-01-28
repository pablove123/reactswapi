
import { getAllStartships } from '../services/api-sw-api';
import { useState, useEffect } from 'react';
import StarshipCard from '../components/StarshipCard';
import { Link } from 'react-router-dom';

function Starships() {
  const [starships, setStarships] = useState([])

  useEffect(()=> {
    const fetchMonsterList = async () => {
      const starshipData = await getAllStartships()
      setStarships(starshipData.results)
    }
    fetchMonsterList()
  }, [])

  const style ={ 
    color:"red", 
    fontSize: "50px"
  }

  return (
  <>
    {starships.map((starship, idx) => 
    
            <div
           style={style} key={starship[idx]}>
              <Link to="/starship" state={{starship}}> {starship.name} </Link>
            </div>  
          )}
  </>
  );
}

export default Starships;