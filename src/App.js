import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Teacher from './pages/Teacher'
import Courses from './pages/Courses'
import Blog from './pages/Blog'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/teacher' element={<Teacher />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/pricing' element={<Pricing />}
            />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
