import { useState } from 'react'
import Field from './Field'

const Login = ({ onAdd }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!email && !password) {
      alert('Please provide your credentials')
      return
    }

    onAdd({ email, password })

    setEmail('')
    setPassword('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <Field label= 'Email' type='text' placeholder='email' value={email} eventHandling= {(e)=> {setEmail(e.target.value)}}/> 
      <Field label= 'Password' type='password' placeholder='password' value={password} eventHandling= {(e)=> {setPassword(e.target.value)}}/>
      <input type='submit' value='Login' className='btn btn-block' />
    </form>
  )
}

export default Login