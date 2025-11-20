import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Industry from './pages/Industry'
import Casestudy from './pages/Casestudy'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Services from './pages/Services'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Industry' element={<Industry/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/Casestudy' element={<Casestudy/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App