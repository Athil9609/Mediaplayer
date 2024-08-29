import './App.css'
import './bootstrap.min.css'
import Header from './Components/Header'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Footer from './Components/Footer'
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
     <Header/>

     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/his' element={<History/>}/>
      
     </Routes>
     <Footer/>
  
    </>
  )
}

export default App
