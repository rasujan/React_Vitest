import { useState } from "react";

type propsT = {
  initial?: number;
};

const useCounter = ({ initial = 0 }: propsT = {}) => {
  const [count, setCounter] = useState(initial);

  const increment = () => setCounter((counter) => ++counter);
  const decrement = () => setCounter((counter) => --counter);

  return { count, increment, decrement };
};

export default useCounter;
