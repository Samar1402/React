import React, {useState} from "react";

const FunctionComponents=(props)=>{
    const[count,setCount]=useState(0);
    const[changeName,setChangeName]=useState("");
    return (
      <div>
        <p>This is Function Components</p>
        <button onClick={() => setCount(count + 1)}>
          Click me to increament by 1
        </button>
        <h1>{count}</h1>
        <h3>
          I am :{props.name} and age is:{props.age}{" "}
        </h3>
        {/* <input onChange={(e)=>console.log(e.target.value)}></input> */}
        <input onChange={(e) => setChangeName(e.target.value)}></input>
        <button onClick={() => props.setname(changeName)}>
          Change the name to
        </button>
      </div>
    );
}
export default FunctionComponents;