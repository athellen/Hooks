import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [count, setCount] = useState(props.count);
  return (
    <div>
      <p>The current count is {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.count)}>reset</button>
    </div>
  );
};
App.defaultProps = {
  count: 0
};

ReactDOM.render(<App />, document.getElementById("data"));
