import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
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
      </Navbar>
    </>
    
  )
}

export default Header