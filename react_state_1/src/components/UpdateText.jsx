import React from 'react'
import { useState } from 'react'


const UpdateText = () => {
    const [text, showText] = useState('')
  return (
    <div>
      <input
      type='text'
      value={text}
      onChange={(e) => showText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  )
}

export default UpdateText
