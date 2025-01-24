import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  let myObj = {
    username: "mash",
    pass: "123"
  }

  let myArr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className='bg-green-500 text-black p-5 rounded-2xl'>Tailwind Csssssssss</h1>
      {/* <Card editor="vsCode" myObj={ username= "mash", pass ="123Pass"} />  This won't working..........    */}

      {/* !to pass obj, arr we can do this, defind the obj, arr and pass here */}

      {/* <Card userName editor="vsCode" exampleObj={myObj} exampleArr={myArr} /> */}

      {/* Now passing the username and btn txt through props*/}
      <Card userName="mashtechie" btnTxt="visit me profile" />
      <Card userName="mmip" />


    </>
  )
}

export default App
