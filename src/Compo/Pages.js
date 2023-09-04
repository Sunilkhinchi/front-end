import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Posts from './Posts';
import Post from './Post';
import Home from './Home';
// import Single from './Single';
import Singlee from '../components/pages/Single/Singlee';
import Navbar from '../common/Navbar';

 const Pages = () => {
  return (
    <> 
      <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts" element={<Posts/>}/>
          {/* <Route path="/posts/:id" element={<Single/>}/> */}
          <Route path='/posts/:id' element={<Singlee/>}/>
        </Routes> 
    </>
  )
}
export default Pages;