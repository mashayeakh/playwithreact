import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  //! password length
  const [passwordlength, setPasswordLength] = useState(8); //default length is 8 


  //! Numbers allowed or not
  const [numberAllowed, setNumberAllowed] = useState(false); //default  - false

  //! Special characters allowed or not
  const [characterAllowed, setCharacterAllowed] = useState(false); //default -false

  //?initially when page loads a password should be appeared. 
  const [password, setPassword] = useState("");
  // console.log(password)

  //! i need to copy the generated password by clicking on that btn, for that we will use      useRef hook 

  const passwordRef = useRef(null); // -> initially useRef is null 

  const copyToClipboard = useCallback(() => {

    //seleting the whole password while clicking on copy btn
    passwordRef.current?.select();

    ///seeleting the range of the password
    // passwordRef.current?.setSelectionRange(0, 3); // fist 3 letters will be selected
    passwordRef.current?.setSelectionRange(0, 20); // fist 20 letters will be selected

    //getting accessed to system's clipboard
    window.navigator.clipboard.writeText(password);
  }, [password])

  const passGen = useCallback(() => {

    let str = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (numberAllowed) str = str + "0123456789";
    if (characterAllowed) str = str + "~!@#$%";

    for (let i = 1; i <= passwordlength; i++) {
      let idx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(idx);
      console.log(pass)
    }

    //setting into setPassword to se the generated pass
    setPassword(pass);


  }, [passwordlength, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    passGen();
  }, [passwordlength, numberAllowed, characterAllowed, passGen])

  return (
    <>
      <div className="w-full p-4 my-4 max-w-md mx-auto border-gray-300 bg-gray-50 dark:border-gray-500 rounded-lg dark:bg-gray-800">
        <h1 className='text-white text-xl '>Password Generator</h1>
        <div
          className="italic font-medium leading-relaxed text-gray-900 dark:text-white">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

            </div>
            <input
              type="text"
              value={password}
              className="block w-full p-4 ps-50 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500"
              placeholder="password"
              ref={passwordRef}
            />

            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center me-4">
            <input
              type="range"
              min={8}
              max={100}
              onChange={(e) => { setPasswordLength(e.target.value) }}
              value={passwordlength}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer bg-white-700" />
          </div>
          <label htmlFor="" className='text-xs me-10 text-yellow-400'>Length: {passwordlength}</label>

          <div class="flex items-center me-4">
            <input
              id="inline-checkbox"
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}


              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="inline-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numbers</label>
          </div>


          <div class="flex items-center me-4">
            <input
              id="inline-checkbox"
              type="checkbox"
              defaultChecked={characterAllowed}
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}


              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="inline-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
