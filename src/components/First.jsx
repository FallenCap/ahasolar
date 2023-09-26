import React from "react";

const fizzBuzz = (i) => {
  if (i % 3 === 0 && i % 5 === 0) {
    return "FIZZ BUZZ";
  } else if (i % 3 === 0) {
    return "FIZZ";
  } else if (i % 5 === 0) {
    return "BUZZ";
  } else {
    return i;
  }
};

const First = ({ el, isChecked }) => {
  return (
    <React.Fragment>
      {!isChecked ? <div>{el}</div> : <div>{fizzBuzz(el)}</div>}
    </React.Fragment>
  );
};

export default First;
