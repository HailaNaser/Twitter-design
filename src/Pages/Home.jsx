


import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import LeftPart from '../Components/LeftPart';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [textBox, setTextBox] = useState('');
    const [element, setElement] = useState([]);
    const [userData, setUserData] = useState({});
    const [like, setLike] = useState([]);

    useEffect(() => {
        axios.get('https://6657370d9f970b3b36c86882.mockapi.io/login')
            .then((res) => {
                setElement(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

        const storeData = {
            name: localStorage.getItem('Name'),
            username: localStorage.getItem('username')
        };
        console.log(localStorage.getItem('Name'));
        console.log(localStorage.getItem('username'));
        setUserData(storeData);

        const storedLikes = JSON.parse(localStorage.getItem('like')) || [];
        setLike(storedLikes);
    }, []);

    useEffect(() => {
        localStorage.setItem('like', JSON.stringify(like));
    }, [like]);

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


    const handleclick = () => {
        if (textBox.trim() !== '') {
            axios.post('https://6657370d9f970b3b36c86882.mockapi.io/login', {
                tweet: textBox
            })
            .then((res) => {
                console.log(res.data);
                setTextBox('');
                loadTweets(); 
            })
            .catch((error) => {
                console.error('Error posting data:', error);
            });
        }
    };

    const handleLike = (id, tweetText) => {
        if (like.includes(id)) {
            setLike(like.filter(item => item !== id));
            const updatedFavorites = favorites.filter(item => item.id !== id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
            setLike([...like, id]);
            const newFavorite = { id, tweet: tweetText };
            const updatedFavorites = [...favorites, newFavorite];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
    };

    return (
        <div className='home flex'>
            <Sidebar />
            <div className="center-home w-[50%] ">
                <div className="nav-home">
                    <ul className='flex'>
                        <li><Link to="/">For you</Link></li>
                        <li><Link to="/favorite">Favorite</Link></li>
                    </ul>
                </div>
                <div className="partText">
                    <div className="imgNav">
                        <img src="" alt="" />
                        <textarea className='text-[#fff] block' value={textBox} onChange={(e) => setTextBox(e.target.value)} placeholder='What is happening?!'></textarea>
                    </div>
                </div>
                <p className='reply ml-[20px] mb-[10px]'><i className="fas fa-globe-asia"></i>Everyone can reply</p>
                <div className="icon-text-Area flex w-[90%] pt-[10px] pb-[10px] m-[auto]">
                    <div className="icon w-[80%] m-[auto]">
                        <i className="far fa-smile"></i>
                        <i className="fas fa-map-marker-alt"></i>
                        <i className="fas fa-list"></i>
                        <i className="fas fa-user-clock"></i>
                        <i className="far fa-sticky-note"></i>
                    </div>
                    <button className='rounded-[15px] w-[50px] p-[8px] pt-[5px] bold pb-[5px] bg-[#105584] text-[14px] text-[#fff]' onClick={handleclick}>Post</button>
                </div>
                <p className='showpost text-center mt-[10px] mb-[10px] text-[14px] text-[#105584]'>Show posts</p>
                {element.map((el) => (
                    <div key={el.id} className='btm'>
                        <div className=' box-user flex justify-between mb-[10px] h-[100px]'>
                            <div className='user-name flex'>
                                <div className='text-[#fff] mr-[2px]'>{userData.name}</div>
                                <i className="fas fa-certificate mr-[px] text-[11px] text-[#105584]"></i>
                                <div className='text-[#71767b] text-[14px] mr-[2px]'>@{userData.username}</div>
                            </div>
                            <button onClick={()=>(handleDelete(el.id))}><i className="fas fa-ellipsis-h mr-[20px] p-[10px] text-[#fff]"></i></button>
                        </div>
                        <div className='text-[#fff] tweet'>{el.tweet}</div>
                        <div className="icons flex justify-around pl-[5px] pr-[5px] text-[#2f3336]">
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-bookmark"></i>
                            <i className="fas fa-comment"></i>
                            <div className="btnlike" onClick={() => handleLike(el.id, el.tweet)}>
                                {like.includes(el.id) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <LeftPart />
        </div>
    );
}


export default Home;
