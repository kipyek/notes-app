import React from 'react'

const NoteList = ({notes,handleDelete}) => {

 
  return (
    notes.length>0 ?(
        <div className='mt-4'>
        {notes.map((note) =>(
            <div 
            className='bg-white p-2 rounded-lg border-l-4 shadow-lg mb-2'
            style={{
                borderColor: note.priority === "High"? "red": note.priority === "Medium"?'orange':"green"
            }}
            >
            <h1 className='text-xl font-bold'>{note.title}</h1>
            <p>Priority : <strong>{note.priority}</strong></p>
            <p>Categotory : <strong>{note.category}</strong></p>
              <button
              onClick={() => handleDelete(note.id)}
        className='mt-3 text-red-500 cursor-pointer transition hover:text-red-700'
      >
        🗑 Delete
      </button>
            </div>
        ))}
       
        </div>
    ):
    <h1 className='text-center font-bold text-2xl'>No Notes yet</h1>
  )
}

export default NoteList