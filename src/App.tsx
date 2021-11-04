import React, {useState} from 'react';

import './App.css';
import Navbar from "./components/navbar/Navbar";
import ComboBox from "./components/combo_box/ComboBox";

function App() {
    const [userName,setUserName]=useState<string>("");
  return (
    <div className="App">
        <Navbar  name={userName}/>
        <ComboBox changeName={(name:string)=>setUserName(name)}/>
    </div>
  );
}

export default App;
