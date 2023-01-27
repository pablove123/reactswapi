import logo from './logo.svg';
import './App.css';
import { getAllStartships } from './services/api-sw-api';
import { useState, useEffect } from 'react';

function App() {
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
              {starship.name}
            </div>  
          )}
  </>
  );
}

export default App;
