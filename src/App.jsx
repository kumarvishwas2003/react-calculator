import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import './App.css'

function App() {
  const [darkMode,setDarkMode] = useState(false)
  const [value,setValue] = useState(0)
  
  const toggleDark = ()=>{
    setDarkMode(!darkMode)
    if(darkMode){
      document.documentElement.classList.remove("dark")
    }
    else{
      document.documentElement.classList.add("dark")
    }
  }
  const change = ()=>{
    console.log("hello")
  }

  return (
    <>
      <ChakraProvider>
        <div className="h-screen w-screen bg-white flex flex-col justify-center items-center dark:bg-[rgb(29,41,57)] text-xl">
          <div className="switch flex w-full md:w-96 justify-end">
            <Switch id="email-alerts" className="" onChange={toggleDark} />
          </div>
          <div className="calculator border dark:bg-[rgb(14,23,40)] w-full md:w-96 grid grid-cols-3 grid-rows-7 p-4 gap-2">
            <div className="input bg-white col-span-3">
              <input
                type="text"
                className="bg-slate-50 w-full h-full shadow-sm dark:bg-[rgb(29,41,57)]"
                placeholder="0"
                value={99}
              />
            </div>
            <button className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white">
              AC
            </button>
            <button className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white">
              +
            </button>
            <button className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white">
              -
            </button>

            <button className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white">
              x
            </button>
            <button className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white">
              /
            </button>
            <button className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white">
              .
            </button>

            <button className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white">
              7
            </button>
            <button className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white">
              8
            </button>
            <button className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white">
              9
            </button>

            <button className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white">
              4
            </button>
            <button className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white">
              5
            </button>
            <button className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white">
              6
            </button>

            <button className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white">
              1
            </button>
            <button className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white">
              2
            </button>
            <button className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white">
              3
            </button>

            <button className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white">
              0
            </button>
            <button className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white">
              00
            </button>
            <button className="button bg-red-500">=</button>
          </div>
        </div>
      </ChakraProvider>
    </>
  );
}

export default App
