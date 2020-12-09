import React, { useState, useContext } from "react"
import { navigate } from 'gatsby'

import SEO from "components/seo/seo"
import { FirebaseContext } from 'src/firebase'
import { Form, Label, Input, Button } from 'components/common'


const Register = () => {

  const { firebase } = useContext(FirebaseContext)
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    if (form.password === form.confirmPassword) {
      firebase.register({
        email: form.email,
        password: form.password
      }).then(() => navigate('/'))
    }
  }

  const handleChange = e => {
    e.persist()
    const { name, value } = e.target
    setForm(prevValues => ({ ...prevValues, [name]: value }))
  }

  return (
    <section>
      <SEO title="register" />
      <Form onSubmit={handleSubmit} >

        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          name='email'
          placeholder='Email'
          value={form.email}
          onChange={handleChange}
        />

        <Label htmlFor='password'>Password</Label>
        <Input
          type='password'
          name='password'
          placeholder='Password'
          value={form.password}
          onChange={handleChange}
        />

        <Label htmlFor='confirmPassword'>Confirm Password</Label>
        <Input
          type='confirmPassword'
          name='confirmPassword'
          placeholder='Confirm Password'
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <Button type='submit' block>Register</Button>

      </Form>
    </section>
  )
}


export default Register
