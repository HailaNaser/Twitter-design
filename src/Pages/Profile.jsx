import React, { useEffect } from 'react'
import Sidebar from '../Components/Sidebar'
import LeftPart from '../Components/LeftPart'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

 function Profile() {
    const [element , setElement] = useState([]);
    const [userData, setUserData] = useState({});
    const [profileImage, setProfileImage] = useState("");

    useEffect(()=> {
        axios.get('https://6657370d9f970b3b36c86882.mockapi.io/login').then((res)=> {
            setElement(res.data)
        })
        const storeData = {
            name: localStorage.getItem('Name'),
            username: localStorage.getItem('username')
        };
        // console.log(localStorage.getItem('Name'));
        // console.log(localStorage.getItem('username'));
        setUserData(storeData);
        const urlImg = localStorage.getItem('profileImg');
        setProfileImage(urlImg)
    },[])
    const handleDelete = (id) => {
        axios.delete(`https://6657370d9f970b3b36c86882.mockapi.io/login/${id}`)
          .then(() => {
            alert('Your tweet has been deleted')
            setElement(res.data);
          })
          .catch((error) => {
            console.error('Error deleting idea:', error);
          });
      };
    
  return (
    <div className='profile  flex' >
        <Sidebar/>
        <div className="center-profile w-[60%] pl-[40px]">
            <div className="head flex pl-[10px] ">
            <i class="fas fa-arrow-left mr-[20px]"></i>
            <div className="head-profile mb-[10px] mt-[10px]  text-[#fff]">@{userData.username}</div>
            </div>
            <div>
                <img className='back-img w-full h-[200px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5x9JX1_aYLRERHRr2m_x3QAuhrVgbqL0xEQ&s" alt="" />
            </div>
            {/* edit profile */}
            <div className="edit-profile flex p-[10px] justify-between">
                <div>
                <img className='round-img w-[90px] h-[90px] mt-[-40px] rounded-[50%]' src={profileImage} alt="" />
                <div className='mt-[10px] '>
                    <p className='text-[#fff] text-[15px]'>{userData.name}</p>
                    <p className='text-[#2f3336 ] text-[15px]'>@{userData.username}</p>
                </div>
                {/* <img className='img-side w-[50px] h-[50px] ' onClick={changeImg } src={profImge} alt="Add Avtar" /> */}
                </div>
                <button className='btn-profile'>Edit profile</button>
            </div>
            <div className='username '></div>
            <p className=' text-[14px] mt-[10px] pt-[10px]'><i class="far fa-calendar-alt ml-[10px]"></i><span className='ml-[5px]'>Joined January 2019</span></p>
            <div className="following flex mb-[20px] mt-[5px] p-[10px]">
              
                <p className='mr-[20px]  text-[14px]'><span  className='text-[#fff]'>221</span> Following</p>
                <p className='  text-[14px]'><span className='text-[#fff]'>33</span> Followers</p>
            </div>
        <div className="link ">
            <ul className='links flex '>
                <li className='frist'>Posts</li>
                <li>Replies</li>
                <li>Highlights</li>
                <Link to='/Fevorite'>
                <li>Likes</li>
                </Link>
                <li>Articles</li>
                <li>Media</li>
             
            </ul>
            <div className="posts">
            {element.map((el) => (
                    <div key={el.id} className='btm'>
                        <div className='box-user flex justify-between h-[100px]'>
                            <div className='user-name flex'>
                                <div className=' text-[#fff] mr-[2px]'>{userData.name}</div>
                                <i className="fas fa-certificate mr-[px] text-[11px] text-[#105584]"></i>
                                <div className='text-[#71767b] text-[14px] mr-[2px]'>@{userData.username}</div>
                            </div>
                            <button onClick={()=>(handleDelete(el.id))} className='text-[#fff]'><i className="fas fa-ellipsis-h mr-[20px] p-[10px] text-[#fff]"></i></button>
                        </div>
                        <div className='tweetElement text-[#fff] w-[500px]'>{el.tweet}</div>
                        <div className="icons flex justify-around pl-[5px] pr-[5px] text-[#2f3336]">
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-bookmark"></i>
                            <i className="fas fa-comment"></i>
                            {/* <div className="btnlike" onClick={() => handleLike(el.id, el.tweet)}>
                                {like.includes(el.id) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        <LeftPart/>
        </div>
    
  )
}


export default Profile