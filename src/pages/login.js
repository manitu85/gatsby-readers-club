import React, { useState, useContext } from "react"
import { navigate } from 'gatsby'

import SEO from "components/seo/seo"
import { FirebaseContext } from 'src/firebase'
import { Form, Label, Input, Button } from 'components/common'


const Login = () => {

  // const { firebase } = useAuth()
  const { firebase } = useContext(FirebaseContext)
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
  }

  const handleChange = e => {
    e.persist()
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
        />

        <Label htmlFor='password'>Password</Label>
        <Input
          type='password'
          name='password'
          placeholder='password'
          value={form.password}
          onChange={handleChange}
        />

        <Button
          type='submit'
          block
        >Login</Button>

      </Form>
    </section>
  )
}


export default Login
