import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './USER/Pages/Auth/Auth';
import Home from './USER/Pages/Home/Home';
import Findbus from './USER/Pages/FindBus/Findbus';
import Profile from './USER/Pages/Profile/Profile';
import AdminAuth from './ADMIN/Pages/Admin_Auth/AdminAuth';
import AdminDashboard from './ADMIN/Pages/Admin_Dashboard/AdminDashboard';
import BusOwnerAuth from './BUS OWNER/BusOwner Auth/BusOwnerAuth';
import BusOwnerHome from './BUS OWNER/BusOwnerHome/BusOwnerHome';
import Request from './ADMIN/Pages/Request/Request';
import BusDetails from './ADMIN/Pages/Bus Details/BusDetails';
import AdminProfile from './ADMIN/Pages/Admin Profile/AdminProfile';



function App() {
  return (
    <div className="App">
      <Routes>
        {/* USER */}
        <Route path='/auth' element={<Auth />} ></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/find-bus' element={<Findbus></Findbus>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>

        {/* ADMIN */}
        <Route path='/admin-auth' element={<AdminAuth></AdminAuth>}></Route>
        <Route path='/admin-dashbord' element={<AdminDashboard></AdminDashboard>}></Route>
        <Route path='/admin-request' element={<Request></Request>}></Route>
        <Route path='/admin-bus-details' element={<BusDetails></BusDetails>}></Route>
        <Route path='/admin-profile' element={<AdminProfile></AdminProfile>}></Route>


        {/* BUS OWNER */}
        <Route path='/bus-owner-auth' element={<BusOwnerAuth></BusOwnerAuth>}></Route>
        <Route path='/bus-owner-home-page' element={<BusOwnerHome></BusOwnerHome>}></Route>

      </Routes>

    </div>
  );
}

export default App;
