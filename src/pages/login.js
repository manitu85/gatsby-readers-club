import React, { useState, useContext } from "react"
import { navigate } from 'gatsby'

import SEO from "components/seo/seo"
import { FirebaseContext } from 'src/firebase'
import { Form, Label, Input, Button, ErrorMessage } from 'components/common'

const Login = () => {

  const { firebase } = useContext(FirebaseContext)
  const [errorMessage, setErrorMessage] = useState('')
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    firebase.login({
      email: form.email,
      password: form.password
    }).then(() => navigate('/'))
      .catch(err => {
        console.log(err)
        setErrorMessage(err.message)
      })
  }

  const handleChange = e => {
    e.persist()
    setErrorMessage('')
    const { name, value } = e.target
    setForm(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }

  return (
    <section>
      <SEO title="login" />
      <Form onSubmit={handleSubmit} >

        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          name='email'
          placeholder='email'
          value={form.email}
          onChange={handleChange}
          minLength={6}
          required
        />

        <Label htmlFor='password'>Password</Label>
        <Input
          type='password'
          name='password'
          placeholder='password'
          value={form.password}
          onChange={handleChange}
          minLength={6}
          required
        />

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <Button
          type='submit'
          block
        >Login</Button>

      </Form>
    </section>
  )
}


export default Login
