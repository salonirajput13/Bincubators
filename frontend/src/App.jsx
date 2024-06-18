import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { SnackbarProvider } from 'notistack'
import UserAuth from './UserAuth';
import AdminAuth from './AdminAuth'

import Navbar from './component/Navbar'
import Home from './component/Home'
import Services from './component/services'
import Signup from './component/Signup'
import Login from './component/Login'
import PlanningServices from './component/PlanningServices'
import LaunchingServices from './component/LaunchingServices'
import ManagingServices from './component/ManagingServices'
import Contactus from './component/Contactus'
import Roadmap from './component/Roadmap';
// import AdminProfile from './component/Admin/AdminProfile';
import ViewService from './component/ViewService';
import { AppProvider } from './AppContext';
import UpdateService from './component/UpdateService';
import ForgetPassword from './component/ForgetPassword';
import UserProfile from './component/UserProfile';
import Main from './component/Admin/Index';
import Dashboard from './component/Dashboard';
import Pmanage from './component/Pmanage';
import Lmanage from './component/Lmanage';
import Mmanage from './component/Mmanage';
import Header from './component/Admin/Header';
import Base from './component/Admin/Base';
import Umanage from './component/Umanage';
import EnquiryData from './component/EnquiryData';
import AddServices from './component/AddServices';
// import Chat from './components/Chat'
// import ExpertChat from './components/ExpertCaht'
// import UserChat from './components/UserChat'


const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
          <AppProvider>
            <Navbar />

            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/services' element={<Services/>} />
              <Route path='/Signup' element={<Signup/>} />
              <Route path='/Login' element={<Login/>} />

              <Route path='/PlanningServices' element={<PlanningServices/>} />
              <Route path='/LaunchingServices' element={<LaunchingServices/>} />
              <Route path='/ManagingServices' element={<ManagingServices/>} />
              
              <Route path='/UpdateService/:id' element={<AdminAuth><UpdateService /></AdminAuth>} />
              <Route path='/Roadmap' element={<Roadmap/>} />
              <Route path='/Contactus' element={<Contactus/>} />
              <Route path='/view/:id' element={<ViewService/>} />
              <Route path='/ForgetPassword' element={<ForgetPassword/>} />
              
              <Route path='/UserProfile' element={<UserAuth><UserProfile/></UserAuth>}/>

              <Route path='/Admin' element={<AdminAuth> <Main /> </AdminAuth>} > 
                <Route path='Dashboard' element={ <Dashboard />} />
                <Route path='Pmanage' element={<Pmanage />} />
                <Route path='Lmanage' element={<Lmanage />} />
                <Route path='Mmanage' element={<Mmanage />} />
                {/* <Route path='AdminProfile' element={<AdminProfile />} /> */}
                <Route path='Header' element={<Header />} />
                <Route path='Base' element={<Base />} />
                <Route path='Umanage' element={<Umanage />} />
                <Route path='EnquiryData' element={<EnquiryData />} />
                <Route path='AddServices' element={<AddServices/> } />
                
                {/* <Route path='Sidebar' element={<Sidebar />} /> */}
              </Route>
            
            
            </Routes>
            {/* <Chat /> */}
          </AppProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App