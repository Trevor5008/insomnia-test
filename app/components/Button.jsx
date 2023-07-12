import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3" onClick={onClick}>
        {text}
    </button>
  )
}

export default Button