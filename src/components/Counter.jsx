import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };
  const toZero = () => {
    setCounter(counter - counter);
  };
  return (
    <div>
      <p> Counter: {props.counterP}</p>
      <button onClick={props.increase}>Click to increase</button>
      <button onClick={props.decrease}>Click to decrease </button>
      <button onClick={props.toZero}>Reset to zero </button>
      <Counter
        counterP={counter}
        increase={increase}
        decrease={decrease}
        toZero={toZero}
      />
    </div>
  );
};

export default Counter;
