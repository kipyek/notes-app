import React, { useState } from 'react'
import { priorityData } from './data/priorityData'
import { categoryData } from './data/categoryData'
import TextInput from './TextInput'
import TextAreaInput from './TextAreaInput'
import Select from './Select'

const initial ={
        title: '',
        priority: 'High',
        category: 'Work',
        des: ''
    }

const NoteForm = ({ notes, setNotes }) => {
    const [formData, setFormData] = useState(initial)

    const handleChange = (e) => {
             setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (!formData.title || !formData.des) return
        const newNotes = {id: Date.now(),...formData}
        setNotes([newNotes,...notes])
        setFormData(initial)
    }

    return (
        <form onSubmit={handleFormSubmit} className='mb-2'>
            <h1 className='text-2xl mb-2 font-bold text-center'>📝 Notes App</h1>
            <TextInput
                name='title'
                label={"Title"}
                value={formData.title}
                onChange={handleChange}
            />
            <Select
                name='priority'
                label="Priority"
                value={formData.priority}
                onClick={handleChange}
                data={priorityData}
            />

            <Select
                name='category'
                label="Category"
                value={formData.category}
                onClick={handleChange}
                data={categoryData}
            />

            <TextAreaInput
                name='des'
                label={"Description"}
                value={formData.des}
                onClick={handleChange}
            />
            <button
                className='w-full bg-purple-500 rounded-lg text-white p-2 items-center mt-4 hover:bg-purple-600'>
                Save
            </button>

        </form>
    )
}

export default NoteForm