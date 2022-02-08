import "./App.css";
import React, { useState } from "react";

// think im going to need to mke this a class but watch this space




function InputEnc(props) {


  const localApi = "http://localhost:8080/words/"+props.service;

  
  const onClickBut = () => {
    

    fetch(localApi, {

      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
         'Content-Type': 'application/json'
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        "message": title,
        "key": "WIMBLEDON" 
      }) // body data type must match "Content-Type" header
   })
      .then(response => {
         console.log(response.json())
      })
      .catch(err => {
         console.log(err)
      })
}
  


  // state that is set by using interacts... set title in the input
  // call funtion to use state when button is pressed
  const [title, setTitle] = useState('');

  return (
    <ul id="growing-search-freebie">
      <li>
        <div className="growing-search">
          <div className="growingsearchcontent">
            <div className="input">
              {/*this is cool as f, so the e param in onChange (below) gives me acces to event object
               of the input i am inside */}
              <input
                className="maininp"
                type="text"
                placeholder="EnterText"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="submit">
              <button type="submit" className="buttonStyle" onClick={onClickBut}><i className="fa fa-search"></i></button>
            </div>
          </div>
        </div>
      </li>
      <p>{props.service}</p>
    </ul>
  );
}

export default InputEnc;
