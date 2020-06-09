import React from 'react'
import './style.css'

function textInput(props) {
    return <>
        <input
            className='Text'
            type='text'
            {...props.input}
            placeholder={props.input.name}
        />
    </>
}

export default textInput