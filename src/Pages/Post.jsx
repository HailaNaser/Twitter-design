import React from 'react'
import { useState , useEffect } from 'react';
import Home from './Home';
import axios from 'axios';
import { Link } from 'react-router-dom';

 function Post() {
  const [element , setElement] = useState('');
  const [text , setText] = useState('')

  useEffect(()=> {
    axios.get('https://6657370d9f970b3b36c86882.mockapi.io/login')
 },[])

  const handleclick =()=> {
    if(text !== '' ){
      axios.post('https://6657370d9f970b3b36c86882.mockapi.io/login', {
        tweet: text
      }).then((res)=> 
      console.log(res.data))
      alert('Your tweet has been sent')
      setText('')
    }
  }
    
  return (
    <div>
      {/* <Home/> */}
      <div className='contaner-post'>
      <div className='post-box w-[500px] h-[280px]'>
        <div className="head-post flex justify-between mb-[10px]">
          <Link to='/'>
          <button className='text-[#fff]'>X</button></Link>
       
          <p className='text-[#4cb0f3]'>Drafts</p>
        </div>
      <div className="imgNav flex ">
                <img className='round-img w-[70px] h-[70px]  rounded-[50%] mr-[10px] mb-[5px] '  src="https://i.pinimg.com/736x/a9/de/da/a9deda76c39f72e6431416e585bafcb8.jpg" alt="" />
                <textarea className='block' value={text} onChange={(e)=> setText(e.target.value)} name="" id="" placeholder='What is happening?!'></textarea>
            </div>
     
        <p className='reply ml-[20px] mb-[10px] text-[#4cb0f3]'> <i class="fas fa-globe-asia"></i>Everyone can reply</p>
        <div className="icon-text-Area flex w-[90%] pt-[10px] pb-[10px] m-[auto]">
            <div className="icon w-[80%] m-[auto]">
        <i class="far fa-smile"></i>
        <i class="fas fa-map-marker-alt"></i>
        <i class="fas fa-list"></i>
        <i class="fas fa-user-clock"></i>
        <i class="far fa-sticky-note"></i>
            </div>
            <button className='rounded-[15px] w-[60px] p-[8px] pt-[5px] bold pb-[5px] bg-[#4cb0f3] text-[14px] text-[#fff]' onClick={handleclick}>Post</button>
        </div>
        <p className='showpost text-center mt-[10px] mb-[10px] pl-[5px] pr-[5px] text-[14px] text-[#4cb0f3]'>Show posts</p>
        </div>
      </div>
      </div>
    // </div>
  )
}

export default Post