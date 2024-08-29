import React from 'react';
import {Row,Col} from 'react-bootstrap'
import Addvedio from '../Components/Addvedio';
import Catogories from '../Components/Catogories';
import Videos from '../Components/Videos'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className='d-flex justify-content-between container-fluid'>
      <h1>Videos</h1>
      <Link to={'/his'}>Watch History</Link>
    </div>
    <div className='container-fluid'>
    <Row>
      <Col sm={12} md={1}>
      <Addvedio/>
      </Col>
      <Col sm={12} md={8}>
      <Videos/>
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