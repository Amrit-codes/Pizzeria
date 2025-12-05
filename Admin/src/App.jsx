import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddPizza from './pages/AddPizza'
import List from './pages/List'

function App() {

  return (

    <>

      <Navbar />

      <Routes>

        <Route path='/dashboard' element={<Dashboard />} >  </Route>

        <Route path='/addPizza' element={<AddPizza />} >  </Route>

        <Route path='/List' element={<List/>}/>

      </Routes>

    </>

  )
}

export default App
