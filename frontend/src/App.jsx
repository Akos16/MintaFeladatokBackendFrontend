import { useState } from 'react'
import './App.css'

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import GuestNavbar from './GuestNavbar'
import Home from './Home'
import Login from './Login'
import Products from './Products'
import Register from './Register'
import UserNavbar from './UserNavbar'
import UserProfile from './UserProfile'

import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user")
    return savedUser ? JSON.parse(savedUser) : null
  })
  function getUser(){
    return user
    
  }
  console.log(user)
  function logout()
  {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUser(null)
  }
  return (
    <BrowserRouter>
      {user ? <UserNavbar logout={logout}/> : <GuestNavbar/>}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={user ? <Navigate to="/profile" replace /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/profile" replace /> : <Login setUserLogin={setUser}/>} />
        <Route path="/profile" element={user ? <UserProfile getUser={getUser}/> : null}  />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
