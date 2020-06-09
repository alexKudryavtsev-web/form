import React from 'react'
import './App.css'
import Title from './components/Title/Title'
import Form from './components/Form/Form'
import { SubmissionError } from 'redux-form'

const systemFio = [
  'admin', 'manager', 'Kim Chen In'
]

function App() {
  function submit(values) {
    if (systemFio.includes(values.fio.trim()))
      throw new SubmissionError({
        fio: 'This is a system fio'
      })

    console.log('form', values)
  }

  const defaultValues = {
    fio: 'Vasy Pupkin',
    password: '',
    confirmPassword: ''
  }

  return <main className='App'>
    <Title />
    <Form
      onSubmit={submit}
      initialValues={defaultValues}
    />
  </main>
}

export default App
