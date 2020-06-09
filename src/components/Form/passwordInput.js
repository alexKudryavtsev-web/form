import React from 'react'
import './style.css'

function passwordInput(props) {
    return <>
        <input
            className='Password'
            type='password'
            {...props.input}
            placeholder={props.input.name}
        />
    </>
}

export default passwordInput