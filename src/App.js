import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
import AppLayout from './pages/AppLayout'
import './App.css';
import NewTask from './pages/NewTask';
// import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <div>

<Routes>

  <Route path='/' element={<AppLayout/>}/>
  <Route path='/newtask' element={<NewTask/>}/>
  {/* <Route path='/login' element={<LoginPage/>}/> */}
  
</Routes>





    </div>
  )
}

export default App


