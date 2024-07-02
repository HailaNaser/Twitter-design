import { useState } from 'react'
import './App.css';
import Router from './Router/Router';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import NewSign from './Pages/SignNew';
import Profile from './Pages/Profile';
import Post from './Pages/Post';
import LeftPart from './Components/LeftPart';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
      <Router></Router>
      {/* <Home/> */}
      {/* <Signin/> */}
      {/* <NewSign/> */}
      {/* <Post/> */}
        {/* <Profile/> */}
        </div>

    </>
  )
}

export default App
