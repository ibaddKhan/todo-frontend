import { Button } from '@material-tailwind/react'
import { useState } from 'react'



 function App() {
  return (<>
  
  <h1 className='text-center mt-5 text-3xl font-bold'>Todo</h1>
 <div className='flex justify-center mt-20'>
     <div class="relative h-11 w-2/4 min-w-[200px]">
      <input placeholder="Static"
        class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
      <label
        class="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      </label>
    </div>
    <Button className='hover:text-white hover:bg-black  ml-2' variant="outlined">Add</Button>

 </div>
  </>
  )
}
export default App
