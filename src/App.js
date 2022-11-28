import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import { FiList } from "react-icons/fi"
import './App.css'
import Profile from './pages/Profile'
import User from './pages/User'
import Products from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">TA Yogs</p>
      </header>
      <Routes>
        <Route path="/home" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <footer>
        <NavLink to="/home" className="iconWrapper">
          <HiHome className="icon" />
          Home
        </NavLink>
        <NavLink to="/user" className="iconWrapper">
          <FiList className="icon" />
          User
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" />
          Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  )
}

export default App