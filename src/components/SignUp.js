import { useState } from 'react'
import Field from './Field'

const SignUp = ({ onAdd }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!email && !password) {
      alert('Please provide your credentials')
      return
    }

    onAdd({ email, password, firstname, lastname })

    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <Field label= 'Firstname' type='text' placeholder='firstname' value={firstname} eventHandling= {(e)=> {setFirstname(e.target.value)}}/> 
      <Field label= 'Lastname' type='text' placeholder='lastname' value={lastname} eventHandling= {(e)=> {setLastname(e.target.value)}}/>
      <Field label= 'Email' type='text' placeholder='email' value={email} eventHandling= {(e)=> {setEmail(e.target.value)}}/> 
      <Field label= 'Password' type='password' placeholder='password' value={password} eventHandling= {(e)=> {setPassword(e.target.value)}}/>
      <input type='submit' value='Sign Up' className='btn btn-block' />
    </form>
  )
}

export default SignUp