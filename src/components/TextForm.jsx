import React, { useState } from 'react'

export default function TextForm(props) {
  //uppercase
  const handleUpperCase = ()=>{
    let upperText = text.toUpperCase()
    setText(upperText)
  }

  //lowercase
  const handleLowerCase =()=>{
    let lowerText = text.toLocaleLowerCase()
    setText(lowerText)
  }

  //handleReset
  const handleReset = ()=>{
     let newText = '';
   setText(newText)
  }
  
  //handle on change text area
  const handleOnChange =(event)=>{
    setText(event.target.value);
  }
  const[text ,setText] = useState('Enter Text Here....') //
  return (
    <>
    <div className='container'>
      <h2>{props.heading}</h2>
      <div className="mb-3">
  
  <textarea style={{fontSize: "20px" }} className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpperCase}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleLowerCase}>Convert to LowerCase</button>
<button className="btn btn-danger mx-1" onClick={handleReset}>Clear</button>


    </div>

    <div className="container my-3">
      <h3>Your Text Summary</h3>
      <p style={{fontSize:"18px"}}>{text.split(" ").length} Word & {text.length} Character</p>
      <p>{0.008 * text.split(" ").length} Minutes take to Read</p>
      <h3>Preview</h3>
      <p>{text}</p>
      
    </div>
    </>
  )
}

