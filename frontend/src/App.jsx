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
import Services from './component/services'
import Base from './component/Admin/Base'
import Index from './component/Admin/Index'
import Header from './component/Admin/Header'
import Sidebar from './component/Admin/Sidebar'
import AddServices from './component/AddServices'
import LaunchingServices from './component/LaunchingServices'
import Lmanage from './component/Lmanage'
import ManagingServices from './component/ManagingServices'
import Mmanage from './component/Mmanage'
import PlanningServices from './component/PlanningServices'

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
          <Route path='/services' element={<Services/>}/>
          <Route path='/AddServices' element={<AddServices/>}/>
          <Route path='/LaunchingServices' element={<LaunchingServices/>}/>
          <Route path='/Lmanage' element={<Lmanage/>}/>
          <Route path='/ManagingServices' element={< ManagingServices />}/>
          <Route path='/PlanningServices' element={< PlanningServices/>}/>
          <Route path='/Mmanage'element={<Mmanage />}/>

          
          <Route path='/Admin' element={<Admin/>}>
          <Route path='Base'element={<Base/>}/>
          <Route path='Header'element={<Header/>}/>
          <Route path='Index'element={<Index/>}/>
          <Route path='Sidebar'element={<Sidebar/>}/>
          </Route>

        </Routes>
        </AppProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App
