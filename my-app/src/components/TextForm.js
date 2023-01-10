import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
  
document.addEventListener("load",window.speechSynthesis.cancel())  

const wordCount =() => {
    if(text.length >0){
    return text.trim().split (" ").length;
    }
    else {
    return 0;
    }
    }
const AClick=()=>{
    console.log("Clicked");
    const newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Successfully Changed into UpperCase","success")
}
const AClick1=()=>{
    console.log("Clicked");
    const newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Successfully Changed into LowerCase","success")
}
const AChange=(event)=>{
    console.log("changed")
    setText(event.target.value)
}
const speak = () => {
    props.showAlert("Speak mode is activated","success")
    setTimeout(() => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        
    }, 2000);
  }
  const stop = () => {
 
    window.speechSynthesis.cancel();
    props.showAlert("Speak mode is terminated","success")
  }

const [text,setText] =useState('')
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 className="mx-2">{props.heading}</h1>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1"></label>
                <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#1d1d1df7':'white', color:props.mode==='dark'?'white':'black'}} value={text} onChange={AChange} id="myBox" rows="8"></textarea>
                <button disabled={text.length===0} className='btn btn-primary mx-2' style={{color:props.mode==='dark'?'white':'black'}} onClick={AClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2' style={{color:props.mode==='dark'?'white':'black'}} onClick={AClick1}>Convert to Lowercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2'style={{color:props.mode==='dark'?'white':'black'}} onClick={speak}>Speak</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2' style={{color:props.mode==='dark'?'white':'black'}} onClick={stop}>Stop</button>
            </div>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
        <p>{wordCount()}words and {text.length}character</p>
        <p>{(wordCount())* 0.008} minutes</p>
        <h2>Preview</h2>
        <p >{text}</p>
        </div>
        </>
    )
}
