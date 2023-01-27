import { Route, Routes } from 'react-router-dom'
import './App.css'
import Starships from './pages/Starships'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/starships' element={<Starships />} />
      </Routes>
    </>
  )
}

export default App
