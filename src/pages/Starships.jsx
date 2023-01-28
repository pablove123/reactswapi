
import { getAllStartships } from '../services/api-sw-api';
import { useState, useEffect } from 'react';
import StarshipCard from '../components/StarshipCard';

function Starships() {
  const [starships, setStarships] = useState([])

  useEffect(()=> {
    const fetchMonsterList = async () => {
      const starshipData = await getAllStartships()
      setStarships(starshipData.results)
    }
    fetchMonsterList()
  }, [])
  console.log(starships)

  const style ={ 
    color:"red", 
    fontSize: "50px"
  }

  return (
  <>
    {starships.map(starship => 
            <div
           style={style} key={starship.index}>
              <StarshipCard star={starship}/>
            </div>  
          )}
  </>
  );
}

export default Starships;