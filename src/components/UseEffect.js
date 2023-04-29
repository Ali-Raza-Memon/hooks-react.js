import React from "react";
import { useState,useEffect } from "react";

const UseEffect = () =>{

    const [count,setCount] = useState(0);

    useEffect(()=>{

        let timer = setTimeout(() =>{
            setCount((count) => count+1);
        },2000)
    })



    return(

        <>
        
        <h1><u>useEffect hook</u></h1>
        <p>The useEffect Hook allows you to perform side effects in your components.</p>
        <h3>Some example of side effect are:fetching data,directly updating the DOM, and timers</h3>
        
        <h1>I have rendered {count} times!</h1>





        </>

    )

}

export default UseEffect