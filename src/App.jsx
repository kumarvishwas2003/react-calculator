import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import './App.css'

function App() {
  const [darkMode,setDarkMode] = useState(false)

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
    <div className="h-screen w-screen bg-white flex flex-col justify-center items-center dark:bg-zinc-800 dark:text-white">
      <div className="switch flex w-full md:w-96 justify-end">
        <Switch id="email-alerts" className="" onChange={toggleDark} />
      </div>
      <div className="calculator border dark:bg-zinc-700 w-full md:w-96 grid grid-cols-3 grid-rows-7 p-4 gap-2">
        <div className="input bg-white col-span-3">
        <input type="text" className='bg-slate-50 w-full h-full shadow-sm'/>
        </div>
  <button className='bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>AC</button>
  <button className='bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>+</button>
  <button className='bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>-</button>

  <button className='bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>x</button>
  <button className='bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>/</button>
  <button className='bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>.</button>

  <button className='bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>7</button>
  <button className='bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>8</button>
  <button className='bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>9</button>

  <button className='bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>4</button>
  <button className='bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>5</button>
  <button className='bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>6</button>

  <button className='bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>1</button>
  <button className='bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>2</button>
  <button className='bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>3</button>

  <button className='bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>0</button>
  <button className='bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>00</button>
  <button className='bg-red-500 rounded-full w-16 h-16 flex items-center justify-center ml-4 mt-3 font-bold shadow-lg'>=</button>
</div>

      </div>
  </ChakraProvider>
</>

  )
}

export default App
