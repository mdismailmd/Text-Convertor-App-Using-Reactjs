import React, { useState } from 'react'

export default function TextForm(props) {
  //uppercase
  const handleUpperCase = ()=>{
    let upperText = text.toUpperCase()
    setText(upperText)
    props.showAlert("Converted to Upper Case","success")
  }

  //lowercase
  const handleLowerCase =()=>{
    let lowerText = text.toLocaleLowerCase()
    setText(lowerText)
    props.showAlert("Converted to Lower Case","success")
  }

  //handleReset
  const handleReset = ()=>{
     let newText = '';
   setText(newText)
   props.showAlert("Screen Cleared","success")
  }
  
  //handle on change text area
  const handleOnChange =(event)=>{
    setText(event.target.value);
  }

  //handle copy text
  const handleCopy = ()=>{
    var text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success")
  }

  //handle extra spaces
  const handleExtraSpaces = ()=>{
    let removeExtraSpaces = text.split(/[ ]+/);
    setText(removeExtraSpaces.join(" "))
    props.showAlert("Removed Extra Spaces","success")
  }


  const[text ,setText] = useState('Enter Text Here....') //
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
  
  <textarea style={{fontSize: "20px", backgroundColor:props.mode==='light'?'white':'#042743', color:props.mode==='light'?'black':'white' }} className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpperCase}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleLowerCase}>Convert to LowerCase</button>
<button className="btn btn-danger mx-1" onClick={handleReset}>Clear</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


    </div>

    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h3>Your Text Summary</h3>
      <p style={{fontSize:"18px"}}>{text === "" ? "0" : text.split(" ").length} Word & {text.length} Character</p>
      <p>{0.008 * text.split(" ").length} Minutes take to Read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter Something in the text box above for preview"}</p>
      
    </div>
    </>
  )
}

