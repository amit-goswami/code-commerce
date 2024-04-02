'use client'

import { useState } from 'react'

export const Window = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: { target: { value: string } }) => {
    setValue(e.target.value)
  }

  return (
    <div className="p-4">
      <textarea
        className="w-full h-32 text-black p-4 rounded-md shadow-lg"
        defaultValue={value}
        onChange={handleChange}
      />
    </div>
  )
}
