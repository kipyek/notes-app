import React from 'react'

const Select =({label,name,value,onClick,data})=> {
  return (
    <div>
        <label htmlFor='priority' className='block font-bold mt-4'>
        {label}
      </label>
      <select
      className='w-full border-[1px] p-2 rounded-lg'
      value={value}
      name={name}
      onChange={onClick}
      >
            {data.map((priority,i) => (
             <option key={i} value={priority.name}>{priority.value}</option>
            ))}
      </select>
    </div>
  )
}

export default Select