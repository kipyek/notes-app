import React, { useState } from 'react'

function App() {
  const [title,setTitle] = useState();
  return (
    <div className='max-w-3xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg '>
      <h1 className='text-2xl mb-2 font-bold text-center'>📝 Notes App</h1>
      <label htmlFor='title' className='block font-bold'>
        Title
      </label>
      <input
        className='border w-full rounded-lg p-1'
        type='text'
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
      />
    </div>
  )
}

export default App
