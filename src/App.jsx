import { useState } from "react"
import NoteForm from "./components/NoteForm"

function App() {
  const [notes,setNotes] = useState([])

  return (
    <div className='max-w-3xl mx-4 mt-10 p-6 bg-gray-100 rounded-lg shadow-lg sm:mx-auto '>
     <NoteForm
     notes={notes}
     setNotes={setNotes}
     />
    </div>
  )
}

export default App
