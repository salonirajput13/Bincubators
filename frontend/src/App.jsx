import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import {SnackbarProvider} from 'notistack'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Contactus from './components/Contactus'

const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home'element={<Home/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Contactus' element={<Contactus/>}/>
        </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App
