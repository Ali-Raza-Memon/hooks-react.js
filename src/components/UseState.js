import React, { useState } from "react";

const UseState = () => {

    const [color, setColor] = useState("Green");

    const onHandle = () => {
        setColor("Blue");
    }


    return (
        <>
            <h1><u>useState hook</u></h1>
            <p>The React useState Hook allows us to track state in a function component.</p>
            <p>State generally refers to data or properties that need to be tracking in an application</p>
            <h3>Example of useState hook</h3>
            <h1>Hello {color}</h1>
            <button type="button" onClick={onHandle}>Click</button>

        </>

    );


}

export default UseState
