import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Home from '../Pages/Home';
import SignNew from '../Pages/SignNew';
import Signin from '../Pages/Signin';
import Post from '../Pages/Post';
import Profile from '../Pages/Profile';
import Fevorite from '../Pages/Fevorite'

function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/Signin",
          element: <Signin/>,
        },
        {
          path: "/SignNew",
          element: <SignNew/>,
        },
        {
          path: "/Post",
          element: <Post/>,
        },
        {
          path: "/Profile",
          element: <Profile/>,
        },
        {
          path: "/Fevorite",
          element: <Fevorite/>,
        },
      ]);

    
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}


export default Router