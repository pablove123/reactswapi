
import { getAllStartships } from '../services/api-sw-api';
import { useState, useEffect } from 'react';

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

  return (
  <>
    <h1>Slay</h1>
    {starships.map(starship => 
            <div key={starship.index}>
              {/* <Link to="/starship" state={{starship}}>{starship.name}</Link> */}
              <button>{starship.name}</button>
            </div>  
          )}
  </>
  );
}

export default Starships;