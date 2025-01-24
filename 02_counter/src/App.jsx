import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 15;

  //hook - here setCounter is a function which will update the value of counter 
  let [counter, setCounter] = useState(15);

  let increaseVal = () => {
    // counter++;
    // console.log(counter);                 
    if (counter < 20) {
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
    } else {
      alert("Counter value can not be greater than 20");
    }
  }

  let decreaseVal = () => {

    (counter > 1) ? setCounter(counter - 1) : alert("Counter value can not be less than 0");

    // setCounter(counter - 1);
    console.log("decreased ", counter);
  }


  return (
    <>
      <h2>Tea and react</h2>
      <p>Counter value : {counter}</p>
      <button onClick={increaseVal}>
        Add Value
      </button>
      <br />
      <button onClick={decreaseVal}>
        Remove Value
      </button>
    </>
  )
}

export default App
