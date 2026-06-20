import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
function App({props}) {

  const[mode, setMode] = useState('light')

  const[alert, setAlert] = useState(null)   
  
  const showAlert = (message, type) =>{
    setAlert({ 
      msg:message,
      type:type
  })
  setTimeout(()=>{
    setAlert(null)
  },2000)
   
  }

  const toggleMode = ()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor= '#042743'
    showAlert("Dark mode has enabled", "success")
  }
  else{
    setMode('light')
    document.body.style.backgroundColor= 'white'
    showAlert("Light mode has enabled", "success")
  }
  }
  
  return (
    <>
    <Navbar title="Text Editor" abouttext="About" mode={mode} toggleMode={toggleMode}/>
    <hr />
    <Alert alert={alert}/>
    <div className="container">
      <TextForm showAlert={showAlert} heading="Enter Text to Converting 👇" mode={mode}></TextForm></div>
    {/* <About/> */}
    </>
  );
}

export default App;
