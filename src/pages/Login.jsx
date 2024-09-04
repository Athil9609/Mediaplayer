import React,{useState} from 'react'
import { json, Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { loginApi } from '../services/allApis';
import { useNavigate } from 'react-router-dom';

function Login() {

    const nav=useNavigate()

    const [user,setUser]=useState({
        email:'',password:''
    })

    const handleLogin=async()=>{

        console.log(user);

        const {email,password}=user

        if(!email || !password){
            toast.warning("Enter valid inputs!!")
        }
        else{
            const res=await loginApi(email,password)
            console.log(res);
            if(res.status==200)
            {
                if(res.data.length>0)
                {
                    console.log(res.data[0]);
                    sessionStorage.setItem('userData',JSON.stringify(res.data[0]))
                    
                    toast.success("Login successfull")
                    setUser({
                        email:'',password:''
                    })
                    nav('/home')
                }
                else{
                    toast.warning("Incorrect email or password")
                }
            }
            else{
                toast.error("Something went wrong")
            }
            

        }
        

    }

  return (

        
    

    <>
    <div className='d-flex justify-content-center align-items-center ' style={{height:'80vh'}}>
        <div className='w-75 border border-3 border-primary p-5 bg-light'>
            <h3 className='mb-3'>Login</h3>
            <input type='text' onChange={(e)=>{setUser({...user,email:e.target.value})}} className='form-control mb-3' placeholder='Enter your e-mail id'/>
            <input type='password' onChange={(e)=>{setUser({...user,password:e.target.value})}} className='form-control mb-3' placeholder='Enter your Password'/>
            <div className='d-flex justify-content-between' >
            <    button className='btn btn-success' onClick={handleLogin}>Login</button>
        <Link className='btn btn-primary ms-3' to={'/register'}>New user?</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login