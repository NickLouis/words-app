import "./App.css";
import React from "react";

function InputEnc() {
  return (
    <ul id="growing-search-freebie">
      <li>
        <div className="growing-search">
          <div className="input">
            <input id="maininp" type="text" placeholder="EnterText" />
          </div>
          <div className="submit">
          <button type="submit" id ="stylebut"><i class="fa fa-search"></i></button>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default InputEnc;
