import React from 'react'
import './App.css'
import Title from './components/Title/Title'
import Form from './components/Form/Form'

function App() {
  function submit(values) {
    console.log('form', values)
  }

  return <main className='App'>
    <Title/>
    <Form onSubmit={submit}/>
  </main>
}

export default App
