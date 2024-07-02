import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignNew() {
    const [name , setName] = useState('');
    const [username , setUserName] = useState('')
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const navegate = useNavigate()

    const validatEmail = (email)=> {
       return  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    }

    const handleClick = ()=> {
        if(name == '' || name.length < 6){
            alert('Enter Your Name')
            return 
        }
        if(email == '' || !validatEmail){
            alert('Enter Your Email')
            return 
        }
        if(password == '' || password.length < 6){
            alert('Enter Your Password')
            return 
        }
    
          localStorage.setItem('Name' , name)
          localStorage.setItem('username', username)
          localStorage.setItem('Email' , email)
          localStorage.setItem('pass' , password)
          navegate('/Signin')
        }
        // axios.post('https://6657370d9f970b3b36c86882.mockapi.io/login', {
        //     Name: name,
        //     Email: email,
        //     username: username,
        //     passWord: password
        // }).then((res)=> {
        //     navegate('/Signin')
        // })
    // }
  


  return (
    <div>
   <div>
     <div className='Signin-content text-center w-[80%] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden'>
       <img src="https://im.rediff.com/news/2023/jul/24twitter.jpg?w=670&h=900" alt="" />
      <div className='Signin-input'>
         <input type="text" value={name} placeholder='Enter Your Name' onChange={(e)=>{setName(e.target.value)}}/>
         <input type="text" value={username} placeholder='Enter User Name' onChange={(e)=>{setUserName(e.target.value)}}/>
      <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Enter Your Email'/>
       <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder='Enter Your Password'/>
       <button  onClick={handleClick}>Login</button>
      
       <ul className=' reg flex mt-[0] text-center ml-[auto] p-[8px]'>
              <p className='mr-[10px]'>Already you have an account? </p>
               <li><Link to='/Signin' className='register text-[#87898a]'>Login here</Link></li>
        
           </ul>
           <p><Link to='/Home' className='register text-[#2c4755] bold'>Back Home</Link></p>
      </div>
  </div>
     </div>
    </div>
  )
}
export default SignNew


















