import React, {useState} from 'react';



function Form(props) {
  const [text, setText] = useState('')

  const handleOnClick = ()=> {
    let newText = text.toUpperCase()
    setText(newText)
    !newText ? props.showAlert('Please write something below', 'warning') : props.showAlert('Text is converted into upper case', 'success')
    
  }

  const handleOnLower = ()=>{
    let newText = text.toLowerCase()
    setText(newText)
    !newText ? props.showAlert('Please write something below', 'warning') : props.showAlert('Text is converted into lower case', 'success')
  }

 const handleOnChange = (event) => {
  setText(event.target.value)
  }

  const RemoveSpaces = ()=>{
    let newText = text.replace(/[  ]{1,}/g, " ").trim()
    setText(newText)
    !newText ? props.showAlert('Please write something below', 'warning') : props.showAlert('All extra spaces are removed', 'success') 
  }

  const clearText = ()=>{
    setText('')
    props.showAlert('Text are cleared', 'success')
  }

  const Worlds = () => {
    let withoutSpace = text.replace(/[  ]{1,}/g, " ").trim()
    if(withoutSpace.length !== 0){
      const Text = withoutSpace.split(" ").length 
      return Text
    } else {
      return 0
    }
  }

  const estTime = () => {
    let newText = Worlds()
    return newText*0.005
  }

  const outColor = () => {
    

    
  }

  return (
  <>
    <div className="container-lg mt-3">
      <div className="mb-3">
        <label htmlFor="textArea" className={`form-label text-${props.mode === 'light'? 'dark': 'light'}`}>Write Here</label>
        <textarea className="form-control" id="textArea" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'? 'white': '#5d617a', color:props.mode === 'light'? 'black': 'white'}} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleOnClick} >Upper Case</button> 
      <button className='btn btn-primary mx-1 my-1' onClick={handleOnLower} >Lower Case </button>
      <button className='btn btn-primary mx-1 my-1' onClick={RemoveSpaces} >Remove Extra Spaces</button>
      <button className='btn btn-primary mx-1 my-1' onClick={clearText} >Clear</button>
    </div>
    <div className='container-lg mt-3' style={{color: props.mode === 'light'? 'black': 'white'}}>
      <h2>Your Text Summery</h2>
      <p>{Worlds()} Words and {text.split(" ").join("").length} Characters</p>
      <p>{estTime()} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length === 0 ? 'Please write in text box': text}</p>
    </div>
  </>
  )
  
}

export default Form;