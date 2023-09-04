import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Posts from './Posts';
// import Post from './Post';
import Home from './Home';
// import Single from './Single';
import Single from './Single';
import Login from './Login';
import AddPost from './AddPost';
import Navbar from '../common/Navbar';
// import Hello from '../Hello';

 const Pages = () => {
  return (
    <> 
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/posts/:id" element={<Single/>}/>
          <Route path="/login" element = {<Login/>}></Route>
          <Route path="/add-post" element = {<AddPost/>}></Route>
          {/* <Route path="/hello-component" element={<Hello name="sunil"/>}/> */}
        </Routes> 
    </>
  )
}
export default Pages;