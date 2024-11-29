import React from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = (props) => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => () => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>Thousand</button>
      <button onClick={setToValue(0)}>Reset</button>
      <button onClick={setToValue(value + 1)}>Increment</button>
    </div>
  );
};

export default App;

/*Toimi hyvin

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = (props) => {
  console.log(props);
  const { handleClick, text } = props;
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(updatedRight + left);
  };

  debugger;

  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text="left" />
        <Button handleClick={handleRightClick} text="right" />
        {right}
        <History allClicks={allClicks} />
        <p>total {total}</p>
      </div>
    </div>
  );
};

export default App;
*/
/** Se toimi hyvin right click ja left click tehtävä
 * 
 * import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(updatedRight + left);
  };

  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        <p>{allClicks.join(" ")}</p>
        <p>total {total}</p>
      </div>
    </div>
  );
};

export default App;*/

// jos me poistan sen "right: clicks.right," kun me klikkamme right asennettaan NAN
/*const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right,
    };
    setClicks(newClicks);
  };

  const handleRightClick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
  };
  --------------------------------
  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
    };
    setClicks(newClicks);
  };

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
  };
  -----------------------
  const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 });

  const handleRightClick = () =>
    setClicks({ ...clicks, right: clicks.right + 1 });
    -------------------- alhalla oleva koodi ei toimi
    const handleLeftClick = () => {
    clicks.left++;
    setClicks(clicks);
  };
  const handleRightClick = () => {
    clicks.right++;
    setClicks(clicks);
  };
  ----------------------
    */
