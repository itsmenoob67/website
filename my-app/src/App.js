import './app.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from 'react'
import { useState } from 'react';
import {
BrowserRouter as Router,
Routes,
Route,
// Link
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null)

  const showAlert=(message,type)=>{
    setalert({
    msg: message,
    type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#1d1d1df7'
      showAlert("Dark mode is applied","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode is applied","success")
    }
  }
  return (
    <>
 <Router>
   <Navbar title="Prajwal" aboutText="About us" mode={mode} togglemode={toggleMode}/>
   <Alert alert={alert}/>
   <div className='container' style={{display:'block' ,margin:"50px"}}>
      <Routes>
      <Route exact path="/REACTJS" element={<TextForm showAlert={showAlert} heading="Enter the text here to analyze:" mode={mode}/>} />
      <Route exact path='/about' element={<About mode={mode}/>}/>
      </Routes>
   {/* <TextForm showAlert={showAlert} heading="Enter the text here to analyze:" mode={mode}/>
   <About/> */}
   </div>
   </Router>

   </>
  );
}

export default App;
