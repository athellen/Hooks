//Alternate to HooksApp.js
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [state, setState] = useState({
    count: props.count,
    text: ""
  });
  return (
    <div>
      <p>
        The current {state.text || "count"} is {state.count}
      </p>
      <button onClick={() => setState({ count: state.count + 1 })}>+1</button>
      <button onClick={() => setState({ count: state.count - 1 })}>-1</button>
      <button onClick={() => setstate({ count: 0 })}>reset</button>
      <input
        value={state.text}
        onChange={e =>
          setState({
            text: e.target.value
          })
        }
      />
    </div>
  );
};

ReactDOM.render(<App count={2} />, document.getElementById("data"));
