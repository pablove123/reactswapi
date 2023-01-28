import { Route, Routes } from 'react-router-dom'
import './App.css'
import Starships from './pages/Starships'
import NavBar from './components/NavBar'
import StarshipDetails from './pages/StarshipsDetails'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/starships' element={<Starships />} />
        <Route path='/starship' element={<StarshipDetails />} />
        <Route 
          path='/starships/:starshipName'
          element={<StarshipDetails />}
        />
      </Routes>
    </>
  )
}

export default App
