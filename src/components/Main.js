import React, { useEffect, useState } from "react";

const Main = (props) => {
  const [count, setCount] = useState(props.init);
  useEffect(() => {
    props.setInitCount(count);
  }, [count, props.setInitCount]);
  return (
    <div>
      <p>Valor: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Main;
