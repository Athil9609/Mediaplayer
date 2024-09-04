import './App.css'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';

import Header from './Components/Header'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Footer from './Components/Footer'
import {Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <>
     <Header/>

     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/his' element={<History/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

      
     </Routes>
     <Footer/>
     <ToastContainer/>
  
    </>
  )
}

export default App
