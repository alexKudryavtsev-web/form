import React from 'react'
import './style.css'

function passwordInput(props) {
    const { meta } = props
    return <>
        <input
            className='Password'
            type='password'
            {...props.input}
            placeholder={props.input.name}
        />
        {meta.error && meta.touched &&
            <div className='Warning'>
                {meta.error}
            </div>
        }
    </>
}

export default passwordInput