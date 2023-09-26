import React from "react";
import styles from "./css/style.module.css";

const fizzBuzz = (i, isChecked) => {
  if (i % 3 === 0 && i % 5 === 0) {
    return isChecked ? "BUZZ FIZZ" : "FIZZ BUZZ";
  } else if (i % 3 === 0) {
    return "FIZZ";
  } else if (i % 5 === 0) {
    return "BUZZ";
  } else {
    return i;
  }
};

const style = (i, isChecked) => {
  if (i % 3 === 0 && i % 5 === 0) {
    return isChecked ? "yellow" : "blue";
  } else if (i % 3 === 0) {
    return "green";
  } else if (i % 5 === 0) {
    return "red";
  }
};
const First = ({ el, isChecked }) => {
  return (
    <React.Fragment>
      {/* {!isChecked ? <div>{el}</div> : <div>{fizzBuzz(el)}</div>} */}

      <div className={styles[style(el, isChecked)]}>
        {fizzBuzz(el, isChecked)}
      </div>
    </React.Fragment>
  );
};

export default First;
