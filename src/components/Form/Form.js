import React from 'react'
import './style.css'
import { reduxForm } from 'redux-form'

function Form(props) {
    const { handleSubmit } = props

    return <form
        className='Form'
        onSubmit={handleSubmit}
    >
        <button
            className='Submit'
            type='submit'
        >
            Submit
        </button>
    </form>
}

export default reduxForm({
    form: 'login'
})(Form)