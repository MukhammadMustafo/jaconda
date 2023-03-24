
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Footer from './components/pages/home/footer/Footer';
import Paymen from './components/pages/home/payment/Paymen';
import Login from './components/pages/login/Login';

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(()=>{
    if(window.localStorage.getItem('key') !== '123456'){
      navigate('/')
    }
  },[location.pathname])

  return (
    <div className="container">
      <div className="App">
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Footer/>}></Route>
        </Routes>
        <Routes>
          <Route path='/payment' element={<Paymen/>}></Route>
        </Routes>

      </div>

    </div>
  );
}

export default App;
