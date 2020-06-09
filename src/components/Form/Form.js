import React from 'react'
import './style.css'
import { reduxForm, Field } from 'redux-form'
import textInput from './textInput'
import passwordInput from './passwordInput'
import { required, matchPassword, range } from './validate'

function Form(props) {
    const { handleSubmit, reset } = props

    return <form
        className='Form'
        onSubmit={handleSubmit}
    >
        <Field
            name='fio'
            component={textInput}
            validate={[required, range()]}
        />
        <Field
            name='password'
            component={passwordInput}
            validate={[required, range(2, 10)]}
        />
        <Field
            name='confirm-password'
            component={passwordInput}
            validate={[matchPassword]}
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
    form: 'login'
})(Form)