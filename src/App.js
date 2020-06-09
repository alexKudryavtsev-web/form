import React from 'react'
import './App.css'
import Title from './components/Title/Title'
import Form from './components/Form/Form'

function App() {
  function submit(values) {
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
