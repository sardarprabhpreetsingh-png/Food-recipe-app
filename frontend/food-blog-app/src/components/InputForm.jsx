import React, { useState } from 'react'
import axios from 'axios'
import { data } from 'react-router-dom'


export default function InputForm({setIsOpen}) {

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [isSignUp, setIsSignUp] = React.useState(false)
  const [error, setError] = React.useState("")

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    let endpoint = (isSignUp) ? "signUp" : "login"
    await axios.post(`http://localhost:5000/${endpoint}`,{email, password}).then((res)=>{
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("user", JSON.stringify(res.data.user))
      setIsOpen()
    })
    .catch(data =>setError(data.response?.data?.error))
  }
  return (
    <>
    <form className='form' onSubmit={handleOnSubmit}>
      <div className='form-control'>
        <label>Email</label>
        <input type='email' className='input' onChange={(e) => setEmail(e.target.value)} required placeholder='Enter your email'/>      
      </div>
      <div className='form-control'>
        <label>Password</label>
        <input type='password' className='input' onChange={(e) => setPassword(e.target.value)} required placeholder='Enter your password'/>      
      </div>
      <button type='submit'>{(isSignUp) ? 'Sign Up' : 'Login'}</button><br></br>
      {(error!= "") && <h6 className='error'>{error}</h6>}
      <p onClick={()=> setIsSignUp(pre=>!pre)}>{(isSignUp) ? 'Already have an account?' : 'Create new Account'}</p>
    </form>
    </>
  )
}
