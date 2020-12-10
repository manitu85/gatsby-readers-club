import React, { useState, useContext } from "react"
import { navigate } from 'gatsby'

import SEO from "components/seo/seo"
import { FirebaseContext } from 'src/firebase'
import { Form, Label, Input, Button, ErrorMessage } from 'components/common'

const Register = () => {

  const { firebase } = useContext(FirebaseContext)
  const [errorMessage, setErrorMessage] = useState('')
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    if (form.password === form.confirmPassword) {
      firebase.register({
        username: form.username,
        email: form.email,
        password: form.password
      }).then(() => navigate('/'))
        .catch(err => {
          console.log(err)
          setErrorMessage(err.message)
        })
    } else {
      setErrorMessage('Password and password confirmed must be matched')
    }
  }

  const handleChange = e => {
    e.persist()
    setErrorMessage('')
    const { name, value } = e.target
    setForm(prevValues => ({ ...prevValues, [name]: value }))
  }

  return (
    <section>
      <SEO title="register" />
      <Form onSubmit={handleSubmit} >

        <Label htmlFor='username'>Username</Label>
        <Input
          type='username'
          name='username'
          placeholder='Username'
          value={form.username}
          onChange={handleChange}
          minLength={6}
          required
        />

        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          name='email'
          placeholder='Email'
          value={form.email}
          onChange={handleChange}
          minLength={6}
          required
        />

        <Label htmlFor='password'>Password</Label>
        <Input
          type='password'
          name='password'
          placeholder='Password'
          value={form.password}
          onChange={handleChange}
          minLength={6}
          required
        />

        <Label htmlFor='confirmPassword'>Confirm Password</Label>
        <Input
          type='confirmPassword'
          name='confirmPassword'
          placeholder='Confirm Password'
          value={form.confirmPassword}
          onChange={handleChange}
          minLength={6}
          required
        />

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <Button type='submit' block>Register</Button>

      </Form>
    </section>
  )
}


export default Register
