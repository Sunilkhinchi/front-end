import React, { useEffect } from 'react'

 const Child = () => {

  useEffect(()=>{
    console.log("child hello");
  },[]);
  return (
    <div><h2>hi Child</h2></div>
  )
}

export default Child;