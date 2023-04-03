import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Main from "./Pages/Main";
import Endeing from "./Pages/Ending"
import Error from "./Pages/Error"
import Profile from "./Pages/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/location" element={<Main/>}/>
        <Route path="/episode" element={<Endeing/>}/>
        <Route path="/:id" element={<Profile/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
