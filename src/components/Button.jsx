import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={` shadow-xl px-5 py-3 cursor-pointer hover:shadow-none rounded-lg text-white ${props.color}`}>{props.text}</button>
    )
}

export default Button