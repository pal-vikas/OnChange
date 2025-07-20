import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [name, setName] = useState('')
  const nameInput = useRef()
  function submitHandler(e)
  {
    e.preventDefault();
    console.log(nameInput.current.value);
    setName(nameInput.current.value);
    nameInput.current.value="";

  }

  return (
    <>
     <div className="w-[500px] rounded-2xl h-[200px] mx-auto mt-50 border p-5 relative">
      <form action="" onSubmit={submitHandler} className='flex gap-10'>
        <input ref={nameInput} className='border p-3 rounded-2xl  ' type="text"  placeholder='Enter you Name '/>
        <button className='bg-black px-4 py-3 text-white text-[20px] rounded-2xl'>Submit</button>
      </form>

      <h1 className='text-3xl text-green-700'>{name}</h1>
     </div>
    </>
  )
}

export default App
