import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
function App() {
  return (
    <>
    <div className='flex '>
    <div>
      <Sidebar/>
    </div>
    <div className='flex-1'>
              <Dashboard/>
            </div>
            </div>
    </>
  )
}

export default App
              
