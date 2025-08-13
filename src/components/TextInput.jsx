import React from 'react'

const TextInput = ({ name, label, value, onChange }) => {
    return (
        <div>
            <label htmlFor='title' className='block font-bold'>
                {label}
            </label>
            <input
                name={name}
                className='border w-full rounded-lg p-2'
                type='text'
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default TextInput