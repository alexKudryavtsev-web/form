import React from 'react'
import './style.css'
import { reduxForm, Field } from 'redux-form'
import textInput from './textInput'
import passwordInput from './passwordInput'
import validate from './validate'

function Form(props) {
    const { handleSubmit, reset } = props

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
            name='confirmPassword'
            component={passwordInput}
        />
        <button
            className='Submit'
            type='submit'
        >
            Submit
        </button>

        <button
            onClick={reset}
            className='Reset'
        >
            Reset
        </button>
    </form>
}

export default reduxForm({
    form: 'login',
    validate
})(Form)