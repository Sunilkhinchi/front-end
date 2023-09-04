import React, { useEffect, useState } from 'react';
import Child from './Child';
import style from './css/style.module.css';


const Hello = (props) => {
   const [fname,setFname] = useState(''); 
   const [lname,setLname] = useState(''); 

   useEffect(()=> {
      console.log("hello");
   },[fname]);

   useEffect(()=> {
      console.log("hello 2");
   },[lname]);
//    setFname('ikrar');

   // console.log('changed', fname);
   return(<>
        <h2 className={style.h2}>Hello {props.name}</h2>
         <p>{fname}</p>
         <input type='text' onChange={(e)=>setFname(e.target.value)} value={fname}/>
         <p>{lname}</p>
         <input type='text' onChange={(e)=>setLname(e.target.value)} value={lname}/>
         <Child/>
         </> 
   );
}


export default Hello;