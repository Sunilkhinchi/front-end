import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


 const Posts = () => {
    let [posts, setPosts] = useState([]);


    useEffect(()=>{
        let url = `${process.env.REACT_APP_API_ROOT}/posts`;
        axios.get(url).then((response)=>{
            setPosts(response.data);
        });   
    },[]);
  // console.log(posts,"post");
  return (
    <>
    <h1 className='text-2xl font-bold'>BLOGS</h1>
    <div className='w-4/5 py-5 m-auto flex justify-between align-middle flex-wrap gap-5'>
    { Object.keys(posts).length ? posts.map((post)=>{
        // console.log(post, "post single");
        return <div key={post.id} className='border p-3 card w-[350px] shadow-lg rounded-lg flex-col' >
                 <Link to={`/posts/${post.id}`}>
                   <img src='http://via.placeholder.com/500' alt={post.title.rendered} className='mb-2'/>
                   <h2 className='text-lg font-medium'>{post.title.rendered}</h2>
                   <p className='excerpt'> {post.excerpt.rendered} </p>
                   {/* <p className='excerpt'> {post.content.rendered} </p> */}
                    {/* <p dangerouslySetInnerHTML={{ __html:post.content.rendered}}></p>  */}
                 </Link>
            </div>
    }) : "Loading..."
   }
   </div>
    </>
  )
}
export default Posts;