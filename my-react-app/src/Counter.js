import React, { useState } from 'react';
import './index.css';
import "./App.js";

function Counter() {

const [count, setCount] = useState(0);

const decrement = () => {
    setCount(count - 1);
}

const reset = () => {
    setCount(0);
}

const increment = () => {
    setCount(count + 1);
}

return (
<>
<h1 id="title">Counter Program</h1>
<p id="number">{count}</p>
<div id="buttons">
    <button id="decrement" onClick={decrement}>Decrement</button>
    <button id="reset" onClick={reset}>Reset</button>
    <button id="increment" onClick={increment}>Increment</button>
</div>
</>
);
}

export default Counter;
