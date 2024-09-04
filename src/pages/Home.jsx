import React,{useState,useEffect} from 'react';
import {Row,Col} from 'react-bootstrap'
import Addvedio from '../Components/Addvedio';
import Catogories from '../Components/Catogories';
import Videos from '../Components/Videos'
import { Link } from 'react-router-dom';

function Home() {

  const [username,setUsername]=useState('')
  const [addResponse,setAddResponse]=useState("")

  useEffect(()=>{
    const data=JSON.parse(sessionStorage.getItem('userData'))
    setUsername(data?.username)
    console.log(username);
    
  },[])
  return (
    <>
          <h2 className='m-3'>Welcome {username}</h2>

    <div className='d-flex justify-content-between container-fluid'>
      <h1>Videos</h1>
      <Link to={'/his'}>Watch History</Link>
    </div>
    <div className='container-fluid'>
    <Row>
      <Col sm={12} md={1}>
      <Addvedio response={setAddResponse}/>
      </Col>
      <Col sm={12} md={8}>
      <Videos add={addResponse}/>
      </Col>
      <Col sm={12} md={3}>
      <Catogories/>
      </Col>
    </Row>
    </div>
    </>
  )
}

export default Home