import "./App.css";
import ClassComponents from "./Components/ClassComponents";
import FunctionComponents from "./Components/FunctionComponents";
import { useState } from "react";

function App() {
  const[name,setName]=useState("Samar");
  return (
    <div className="App">
        <p> Class Components</p>
        <ClassComponents/><br></br>
        <p>Function Components</p>
        {/* <FunctionComponents/> */}
        <FunctionComponents name={name} age="24" setname={setName}/>
    </div>
  );
}

export default App;
