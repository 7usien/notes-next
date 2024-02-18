import React from 'react'
import { FaStickyNote } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";


const Item = () => {
  return (
    <>
   <div className='flex justify-between  border p-4 bg-blue-100 rounded'>
      <h2 className='flex items-center gap-2'>
        <FaStickyNote />
        your note title
      </h2>

    <span className='text-xs text-blue-500 block'><FaEye className='inline' /> 20  | 15 Jan 2024</span>

    </div>

  
      </>
  )
}

export default Item