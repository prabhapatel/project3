import React from 'react'
import Navbar from './Navbar'
export default function Dashboard() {
  return (
    <>
     <div>
        <div className='h-[10vh] p-4 bg-slate-400'>navbar</div>
      <div className='   pt-4 text-2xl font-semibold h-[90vh] bg-slate-100 relative'>
        <div className='flex space-x-8 p-3'>
        <div className=' p-2 w-1/4 h-28 border-black border-2 bg-gray-100'>1</div>
        <div className='p-2 w-1/4 h-28 border-black border-2 shadow-slate-100 bg-gray-100'>2</div>
        <div className='p-2 w-1/4 h-28 shadow-xl  border-black border-2 shadow-gray-100 bg-gray-100e'>3</div>
        <div className='p-2 w-1/4 h-28  border-black border-2 bg-gray-100'>4</div>
        </div>
        <div className='flex'>
          <div className='w-2/4 h-[62vh] border-black border-2 m-4'>GRAPH</div>
        <div className='w-2/4 h-[62vh] border-black border-2 m-4'>RECENT ORDER LIST</div>
        </div>
        </div>
        </div>
     
    </>
    
  )
}
