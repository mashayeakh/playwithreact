import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import Test from './Test.jsx'
import { Example } from './Example.jsx'


// const reactElement = {
//   //? type
//   //? props [property]
//   //? children

//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank"
//   },
//   Children: "Click me to go to google!!!!"
// };


//we have creted our own custom react element with diff name and rendered it to the dom. But now we are tring how react handle these

const anotherUser = "Rose";

const reactEle = React.createElement(
  //lets say tag - a, href, google..com, target blank
  "a",
  // now this propos but we are not creating any props like we did during our own custom react
  {
    href: "https://www.google.com",
    target: "_blank"
  },
  //do you remember we created children in our own custom react to have the inner html?
  "visit google!!!!",

  anotherUser
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Example /> */}
    {/* {reactEle} */}
    {reactEle}
  </StrictMode>
)
