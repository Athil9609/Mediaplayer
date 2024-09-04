import React,{useEffect,useState} from 'react'
import { getHistory,deleteHistory } from '../services/allApis'

function History() {



  const [History,setHistory]=useState([])

  useEffect(()=>{
    getData()

  },[])

  const handleDelete=async(id)=>{
   const res=await deleteHistory(id)
   console.log(res)
   if(res.status==200)
   {
    getData()
   }
   
  }


  const getData=async()=>{
    const res= await getHistory()
    console.log(res);

    if(res.status==200){
      setHistory(res.data)
    }
    else{
      console.log(res);
      
    }

  }
  return (
    <>
 
    <div className='p-5'> 
      <h1>Watch History</h1>
      
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Video Id</th>
            <th>Video title</th>
            <th>Video Url</th>
            <th>Date and time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {
      History.map(item=>(
        <tr>
      
      <td>{item.videoId}</td>
            <td>{item.title}</td>
            <td>{item.url}</td>
            <td>{item.date}</td>
            <td>        <button onClick={()=>{handleDelete(item.id)}} className="btn"><i className="fa-solid fa-trash " style={{color: "#ff0000",}} /> Delete</button>
            </td>
          </tr>
          

        
      ))
      
      
    }
          
        </tbody>
      </table>
    </div>
    </>
  )
}

export default History