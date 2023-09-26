import React, { useState } from "react";
import "../App.css";

const Input = ({ setList, isChecked, setIsChecked }) => {
  const [input, setInput] = useState();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setList(input);
  };
  return (
    <React.Fragment>
      <form onSubmit={formSubmitHandler} className="render">
        <input
          type="number"
          onChange={(e) => setInput(e.target.value)}
          defaultValue={input}
        />
        <input
          type="checkbox"
          onChange={() => setIsChecked(!isChecked)}
          value={isChecked}
        />
        <div className="button">
          <button type="submit">submit</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Input;
