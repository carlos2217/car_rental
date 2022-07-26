import {useEffect, useState, useContext} from 'react'
import { Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import useeCurrentUser from './hooks/useCurrentUser'

import ProtectedRoute from './components/common/protectedRoute'
import ProtectedRouteAdmin from './components/common/protectedRoueAdmin'

import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';
import LinsesCreate from './pages/linsesCreate'
import LinsesUpdate from './pages/lineseUpdate'
import useUserLinese from './hooks/useUserLinese'
import Admin from './pages/admin';
import CreateCar from './pages/car/createCar';
import AllCars from './pages/car/allCars';
import Unauth from './pages/unauth';
import Rent from './pages/rent'
import CarDetails from './pages/car/carDetails'
import Orders from './pages/orders'
import UserDetails from './pages/userDetails'
import TailNavBar from './components/navBar/TailNavBar'
import Cars from './pages/Cars'
import Footer from './components/Footer'
import Return from './pages/Return'
import Profile from './pages/Profile'
import EditUser from './pages/EditUser'
import MyCar from './pages/MyCar'

const loged = localStorage.getItem('loged')
function App() {
  const {linese} = useUserLinese()
  const {user} = useeCurrentUser()
  return (
    <div className=''>
      <ToastContainer />
      <div>
        <TailNavBar user={user}/>
      </div>
      <div className='bg-gray-200'>
        <Routes>
          <Route path='*' element={<h1>Page not Fund</h1>} />
          <Route path='/' element={<Home />} />
          <Route path='/cars' element={<Cars loged={loged} linese={linese}/>} />
          <Route path='/notFound' element={<h1>Not Found</h1>} />
          <Route path='/rent/:id' element={<ProtectedRoute loged={loged}> <Rent /> </ProtectedRoute>  } />
          <Route path='/profile' element={<ProtectedRoute loged={loged}> <Profile /> </ProtectedRoute>  } />
          <Route path='/profile/edit/:id' element={<ProtectedRoute loged={loged}> <EditUser /> </ProtectedRoute>  } />
         
          <Route path='/admin' element={<ProtectedRouteAdmin user={user} loged={loged} > <Admin /> </ProtectedRouteAdmin>} >
            <Route path='admin/car' element={<ProtectedRouteAdmin user={user} loged={loged}> <AllCars /> </ProtectedRouteAdmin>  }/>
            <Route path='admin/car/create' element={<ProtectedRouteAdmin user={user} loged={loged}> <CreateCar /> </ProtectedRouteAdmin>  }/>
            <Route path='admin/car/orders' element={<ProtectedRouteAdmin user={user} loged={loged}> <Orders /> </ProtectedRouteAdmin>  }/>
            <Route path='admin/car/return' element={<ProtectedRouteAdmin user={user} loged={loged}> <Return /> </ProtectedRouteAdmin>  }/>
          </Route>
         
          <Route path='/:id/car/details' element={<ProtectedRouteAdmin user={user} loged={loged}> <CarDetails /> </ProtectedRouteAdmin>  } />
          <Route path='/:id/user/details' element={<ProtectedRouteAdmin user={user} loged={loged}> <UserDetails /> </ProtectedRouteAdmin>  } />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/unauth' element={<Unauth />} />
          
          <Route path='/dashboard' element={<ProtectedRoute loged={loged}> <Dashboard linese={linese} /> </ProtectedRoute>} >
            <Route path='dashboard/create' element={<ProtectedRoute loged={loged}> <LinsesCreate /> </ProtectedRoute>  }/>
            <Route path='dashboard/update' element={<ProtectedRoute loged={loged}> <LinsesUpdate linese={linese} /> </ProtectedRoute>}/>
            <Route path='dashboard/mycar' element={<ProtectedRoute loged={loged}> <MyCar  /> </ProtectedRoute>}/>
          </Route>
        
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
