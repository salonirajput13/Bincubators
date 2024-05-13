import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {SnackbarProvider} from 'notistack'
import { AppProvider } from './AppContext'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Login from './component/Login'
import Signup from './component/Signup'
import Contactus from './component/Contactus'
import './App.css'

const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
        <AppProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home'element={<Home/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Contactus' element={<Contactus/>}/>
        </Routes>
        </AppProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App
