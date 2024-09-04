import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Videocards from './Videocards'
import { useEffect,useState } from 'react'
import {  getVideos } from '../services/allApis'



function Videos({add}) {
  const [delResponse,setDelResponse]=useState('')

  const [videos,setVideos]=useState([])
  useEffect(()=>{
    getData()

  },[add,delResponse])


  const getData=async()=>{
    const res = await getVideos()
    console.log(res);

    if(res.status==200)
    {
      setVideos(res.data)
    }
    else{
      console.log(res);
      
    }
    

  }
  return (
   <>
       <div className='border border-3 p-5'>
{

  videos.length>0?
  <Row>
    {
      videos.map(item=>(<Col>
        <Videocards v={item} response={setDelResponse}/>
        </Col>))
    }
          
        </Row>
        :
        <h2 className='text-center text-danger'>No vedios available</h2>
}
        
        </div>

   </>
  )
}

export default Videos