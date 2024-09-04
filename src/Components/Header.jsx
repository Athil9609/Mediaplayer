import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
function Header() {
  const nav=useNavigate()

  const lgout=()=>{
    nav('/')
    sessionStorage.removeItem('userData')
  }

  return (
    <>
    <Navbar className="bg-primary ">
        <Container>
          <Navbar.Brand href="#home" className='text-white'>
          <i className="fa-brands fa-youtube " style={{color:"#d70909"}}></i>
           {' '}

            Media Player
          </Navbar.Brand>
        </Container>
        <button onClick={lgout} className='btn btn-danger me-2'>Log out</button>
      </Navbar>
    </>
    
  )
}

export default Header