import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './USER/Pages/Auth/Auth';
import Home from './USER/Pages/Home/Home';
import Findbus from './USER/Pages/FindBus/Findbus';
import Profile from './USER/Pages/Profile/Profile';
import AdminAuth from './ADMIN/Pages/Admin_Auth/AdminAuth';
import AdminDashboard from './ADMIN/Pages/Admin_Dashboard/AdminDashboard';
import Request from './ADMIN/Pages/Request/Request';



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
      </Routes>

    </div>
  );
}

export default App;
