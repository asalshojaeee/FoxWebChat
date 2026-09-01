import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Setting from './pages/Setting'
import Profile from './pages/Profile'
import { useAuthStore } from './store/useAuthStore'
const App = () => {

  const {authUser,checkAuth}=useAuthStore()


  useEffect(()=>{
    checkAuth()

  },[checkAuth])
  return (


    <div>

      <Navbar />



      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/profile' element={<Profile/>}/>



      </Routes>
    </div>




  )
}

export default App