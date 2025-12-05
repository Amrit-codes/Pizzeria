
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import 'animate.css';

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Blog from './pages/Blog.jsx'
import Menu from './pages/Menu.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './components/Cart.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

import Order from './pages/Order.jsx'

function App() {

  return (

    <div>

      <Navbar />

      <Routes>


        <Route path='/' element={<Home />} />

        <Route path='/About' element={<About />} />

        <Route path='/Services' element={<Services />} />

        <Route path='/Contact' element={<Contact />} />

        <Route path='/Blog' element={<Blog />} />

        <Route path='/Menu' element={<Menu />} />

        <Route path='/Cart' element={<Cart />} />

        <Route path='/Order' element={<Order />} />

        <Route path='/Login' element={<Login />} />

        <Route path='/Register' element={<Register />} />

      </Routes>

    </div>

  )
}

export default App