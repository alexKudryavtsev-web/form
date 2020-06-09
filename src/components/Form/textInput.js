import React from 'react'
import './style.css'

function textInput(props) {
    const { meta } = props
    return <>
        <input
            className='Text'
            type='text'
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

export default textInput