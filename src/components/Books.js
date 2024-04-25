import React, { useRef, useState } from 'react'
import { vedabase } from '../utils/vedabase'
import Book from './Book';
import { Link } from 'react-router-dom';
const Books = () => {
  const [data,setdata]=useState(vedabase);
  const ip=useRef(null);
  // setdata(vedabase)
  
  const handleclick=()=>{
    const newdata=vedabase.filter((props)=>props.name.toLowerCase().includes(ip.current.value.toLowerCase()));
      setdata(newdata)
  }
  return (
    <div>
      <div className='flex justify-center fixed w-full bg-red-100'>
        <input className=' w-1/2 p-4 border border-black m-2 rounded-lg'
        ref={ip}
        />
        <button className='bg-black text-red-100 p-4 m-2 rounded-lg' onClick={handleclick}>search</button>
      </div>
    <div className='flex py-24 flex-wrap bg-gradient-to-b from-red-100 to-orange-200  justify-center'>
      {data.map((props) => (
        <Link to={props.link} key={props.name}>
          
          <Book key={props.name} {...props} />
          </Link>
      ))}
    </div>
    </div>
  )
}

export default Books