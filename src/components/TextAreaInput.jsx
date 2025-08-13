import React from 'react'

const TextAreaInput = ({ label, value, onClick, name }) => {
    return (
        <div>
            <label htmlFor='category' className='block font-bold mt-4'>
                {label}
            </label>
            <textarea
                name={name}
                cols={6}
                rows={6}
                value={value}
                onChange={onClick}
                className='w-full border rounded-lg p-2'
            >
            </textarea>
        </div>
    )
}

export default TextAreaInput