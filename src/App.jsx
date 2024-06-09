import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home/Home'
import Portfolio from './assets/pages/Portfolio/Portfolio'
import Header from './assets/components/Header/Header'
import Footer from './assets/components/Footer/Footer'
import Secrives from './assets/pages/Services/Secrives'
import Contact from './assets/pages/Contact/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/services' element={<Secrives/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<h1>Service</h1>}/>
        <Route path='/contact' element={<h1>Contact</h1>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
