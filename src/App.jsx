import React, { useState, useEffect } from "react";
import First from "./components/First";
import Input from "./components/Input";
import "./App.css";

const App = () => {
  const [list, setList] = useState();
  const [arr, setArr] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const loadList = () => {
      let newArr = [],
        i = 0;
      while (++i <= list) {
        newArr.push(i);
      }

      setArr(newArr);
    };

    loadList();
  }, [list]);
  // console.log(isChecked);
  return (
    <React.Fragment>
      <div className="render">
        <Input
          setList={setList}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      </div>
      <div className="render">
        {arr.map((el) => (
          <First el={el} key={Math.random()} isChecked={isChecked} />
        ))}
      </div>
      {/* <div className="button">
        <button onClick={() => setList(list + 20)}>Click</button>
      </div> */}
    </React.Fragment>
  );
};

export default App;
