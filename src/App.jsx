import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { customDecrement, customIncrement, decrement, increment } from "./redux/features/counter/counterSlice";

import "./App.css"

function App() {

  const dispatch = useDispatch();

  // console.log(useSelector(state => state.counterReducer.value));

  const counter = useSelector(state => state.counterReducer.value);

  return (
    <div>
      <div id="counter">{counter}</div>
      <div className="changeFuncs" onClick={() => dispatch(decrement())}>-</div>
      <div className="changeFuncs" onClick={() => dispatch(increment())}>+</div>
      <div className="changeFuncs" onClick={() => dispatch(customIncrement(5))}>custom increment <span className="custom">(+5)</span></div>
      <div className="changeFuncs" onClick={() => dispatch(customDecrement(3))}>custom decrement <span className="custom">(-3)</span></div>
    </div>
  )
}

export default App
