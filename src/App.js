import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './Route/PrivateRoute';



//1. 전체상품페이지, 로그인, 상품상세페이지,
function App() {
  useEffect(()=>{
    console.log('aaa',authenticate)
  })
  const [authenticate ,setAuthenticate]=useState(false); //true면 로그인 false 
  return (
    <div >
      <Navbar authenticate={authenticate}/>
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
