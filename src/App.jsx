import React from 'react' 
import Home from './page/Home'
import Savedpass from './page/Savedpass'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savedpass" element={<Savedpass />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App