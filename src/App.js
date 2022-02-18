import React, {useState} from 'react';
import Navbar from './components/Navbar'
import Form from './components/Form';
import Alerts from './components/Alerts';



function App() {
  const[mode, setMode] = useState('light')
  
  const[alert, setAlert] = useState(null)

  const[color, setColor] = useState('#f0f0f0')// light Gray color

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      setColor('black')
      document.body.style.backgroundColor = '#5d617a'
      showAlert('Dark mode is enabled', 'success')

    } else{
      setMode('light')
      setColor('#f0f0f0') //light gray color
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode is enabled', 'success')
   
    }
  }

  const showAlert =  (message, type)=>{
    setAlert({
      msg:message,
      type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const greenButton = () => {
    setColor('lightgreen')
    document.body.style.backgroundColor = '#cdeacbf2' // light green
    showAlert('color scheam changed to Green', 'success')
  }

  const redButton = () => {
    setColor('lightblue')
    document.body.style.backgroundColor = 'lightcyan'
    showAlert('color scheam changed to Light blue', 'success')
  }

  return (
    <>
    <Navbar mode = {mode} toggleMode = {toggleMode}  greenButton = {greenButton} redButton = {redButton} color = {color} />
    <Alerts alert = {alert}/>
    <Form mode={mode} showAlert = {showAlert} color = {color}/>
    
    
   </>
  );
}

export default App;


