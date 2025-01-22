

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home/Home'
import Skills from '../Skills/Skills'
import Projects from '../Project/Project'
import Contact from '../Contact/Contact'
import { About } from '../About/About'

export const Routing = () => {
  return (
  
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
    </Routes>
 
  )
}
