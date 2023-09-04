import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

 const Single = () => {
    const [post,setPost] = useState({});
    useEffect(()=>{
    let url = `${process.env.REACT_APP_API_ROOT}/posts/${id}`;
    axios.get(url).then(response => {
        // console.log(response ,"res")
        setPost(response.data);
    }).catch(err => {
        console.log(err.message , "error")
    });
    },[]);
    const {id} = useParams();
    return (
    <>
        {Object.keys(post).length ? (
             <div className='p-5'>
                <div>
                    <img src={post.featured_src} />
                    {console.log(post)}
                </div>
                <div>
                    <h1>{post.title.rendered}</h1>
                    <p dangerouslySetInnerHTML={{__html:post.content.rendered}}></p>
                </div>
             </div>   
        ) : 'loading...'}
    </>
  )
}
export default Single