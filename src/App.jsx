import { useEffect, useState } from "react"
import NoteForm from "./components/NoteForm"
import NoteList from "./components/NoteList"

function App() {
  const [notes, setNotes] = useState(() => {
    const note = JSON.parse(localStorage.getItem("notes"))
    return note  || []
  }
  )
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])


  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this note?'
    );
    if (confirmDelete) {
      setNotes(notes.filter((noteId) => noteId.id !== id))
    }
  }

  return (
    <div className='max-w-3xl mx-4 mt-10 p-6 bg-gray-100 shadow-lg sm:mx-auto '>
      <NoteForm
        notes={notes}
        setNotes={setNotes}
      />
      <NoteList
        notes={notes}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App
