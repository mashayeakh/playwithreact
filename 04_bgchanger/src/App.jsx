import { useState } from 'react'

function App() {
  let [color, setColor] = useState("olive");
  // console.log(color);

  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >

      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0">
        <div className="">
          <div className="flex flex-wrap justify-center gap-3 bg-white px-2 py-2 rounded-full">



            <button onClick={() => setColor("red")}
              type="button" className="text-white bg-blue-700 rounded-full text-xs px-3 py-2.5 w-20 dark:bg-red-600">Red</button>



            <button onClick={() => setColor("blue")} type="button" className="text-white bg-blue-700 rounded-full text-xs px-3 py-2.5 w-20 dark:bg-blue-600">Blue</button>



            <button onClick={() => setColor("green")} type="button" className="text-white bg-blue-700 rounded-full text-xs px-3 py-2.5 w-20 dark:bg-green-800">Green</button>



            <button onClick={() => setColor("yellow")} type="button" className="text-white bg-blue-700 rounded-full text-xs px-3 py-2.5 w-20 dark:bg-yellow-700">Yellow</button>



            <button onClick={() => setColor("black")} type="button" className="text-white bg-blue-700 rounded-full text-xs px-3 py-2.5 w-20 dark:bg-black">Black</button>



            <button onClick={() => setColor("lime")} type="button" className="text-white bg-blue-700 rounded-full text-xs px-3 py-2.5 w-20 dark:bg-lime-500">Lime</button>



            <button onClick={() => setColor("pink")} type="button" className="text-white bg-blue-700 rounded-full text-xs px-3 py-2.5 w-20 dark:bg-pink-700">Pink</button>



            <button onClick={() => setColor("purple")} type="button" className="text-white bg-blue-700 rounded-full text-xs px-3 py-2.5 w-20 dark:bg-purple-700">Purple</button>



          </div>

        </div>
      </div>

    </div>
  )
}

export default App
