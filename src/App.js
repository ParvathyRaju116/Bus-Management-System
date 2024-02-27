import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './USER/Pages/Auth/Auth';
import Home from './USER/Pages/Home/Home';
import Header from './USER/Components/Header/Header';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/auth' element={<Auth/>} ></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
