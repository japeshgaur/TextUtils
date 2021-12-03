import React, { useState } from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState(' ');
    const ConToUp = ()=>{
        let newText = Text.toUpperCase();
        setText(newText)
    }
    const ConToLo = ()=>{
        let newText = Text.toLowerCase();
        setText(newText)
    }
    const SelectText = (event)=>{
        setText(event.target.value);
    }
    const Clear = ()=>{
        setText(" ")
    }
    const CpyText = ()=>{
 
      navigator.clipboard.writeText(Text);
    }
    return (
        <>

        <div className="container my-4">
    <h2 >Enter Text to Analyze</h2>
  <textarea className="form-control" value = {Text} id="exampleFormControlTextarea1" onChange = {SelectText} rows="8"></textarea>
  <button className="btn btn-primary my-1 mx-1" onClick ={ConToUp}>Convert To Upper Case</button>
  <button className="btn btn-primary my-1 mx-1" onClick ={ConToLo}>Convert To Lower Case</button>
  <button className="btn btn-primary my-1 mx-1" onClick ={Clear}>Clear Text</button>
  <button className="btn btn-primary my-1 mx-1" onClick ={CpyText}>Copy Text</button>
        <h2 my-2>Text Summary</h2>
        <p>{Text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
        <h2>Text Preview</h2>
        <p>{Text}</p>
        </div>
        </>
    )
}

