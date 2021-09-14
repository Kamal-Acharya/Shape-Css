import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
function myFunction(id) {
  /* Get the text field */
  var copyText = document.getElementById(id);

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
function App({title,val,id,img}) {
  return (
    <div  >

   <div class="box">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <input id={id} type="text" value={val} />
        <button onClick={() => myFunction(id)}>Copy</button>
    </div>
   
       
       
  

    </div>
  );
}

export default App;
