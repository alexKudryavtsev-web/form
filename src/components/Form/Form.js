import React from 'react'
import './style.css'
import { reduxForm, Field } from 'redux-form'
import textInput from './textInput'
import passwordInput from './passwordInput'

function Form(props) {
    const { handleSubmit } = props

    return <form
        className='Form'
        onSubmit={handleSubmit}
    >
        <Field
            name='fio'
            component={textInput}
        />
        <Field
            name='password'
            component={passwordInput}
        />
        <Field
            name='confirm-password'
            component={passwordInput}
        />
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