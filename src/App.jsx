import { Button } from '@material-tailwind/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  let [arrData, setArr] = useState([]);
  const [inputValue, setInputValue] = useState(''); 

  useEffect(() => {
    axios.get("https://long-teal-tunic.cyclic.app/").then((res) => {
      console.log(res.data);
      if (Array.isArray(res.data)) { 
        setArr(res.data);
      } else {
        console.error('API response is not an array');
      }
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  
  const handleSubmit = (event) => {  
    event.preventDefault();
    axios.post("https://long-teal-tunic.cyclic.app/add", { title: inputValue })  
    .then((res) => {
      console.log(res.data);
      if (Array.isArray(res.data)) {
        setArr(res.data);
      } else {
        setArr([res.data, ...arrData]);
      }
    })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <>
      <h1 className='text-center mt-5 text-3xl font-bold'>Todo</h1>
      <div className='flex justify-center mt-20'>
        <form className='flex' onSubmit={handleSubmit}> {/* Wrap your input and button in a form */}
          <div className="relative h-11 w-2/4 min-w-[200px]">
            <input placeholder="Static"
              value={inputValue} // Bind the input value to the state
              onChange={(e) => setInputValue(e.target.value)} // Update the state when the input changes
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
            <label
              className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            </label>
          </div>
          <Button type="submit" className='hover:text-white hover:bg-black  ml-2' variant="outlined">Add</Button>
        </form>
      </div>
      <div>
  {
    Array.isArray(arrData) && arrData.map((item, i) => {
      return <h1 key={i}>{item.title}</h1>
    })
  }
</div>

    </>
  );
}

export default App;
