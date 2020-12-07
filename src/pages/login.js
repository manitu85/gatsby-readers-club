import React, { useState } from "react"

import Layout from "components/layout/layout"
import SEO from "components/seo/seo"
import { useAuth } from "src/firebase"

const Login = () => {

  const { firebase } = useAuth()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })


  const handleSubmit = e => {
    e.preventDefault()
    firebase.login({
      email: form.email,
      password: form.password
    })
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
    <Layout>
      <SEO title="login" />
      <form onSubmit={handleSubmit} >

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          placeholder='email'
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          placeholder='password'
          value={form.password}
          onChange={handleChange}
        />

        <button type='submit'>Login</button>

      </form>
    </Layout>
  )
}


export default Login
