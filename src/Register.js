import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { config } from './config'

function Register() {
  const registerform = useFormik({
    initialValues: {
      name:"",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const user = await axios.post(`${config.api}/user/register`, values)
        registerform.resetForm()
        alert(user.data.message)
      } catch (error) {
        console.log(error)
      }
    }
  })
  return (
    <div className='container'>
      <h3>Register the user</h3>
      <form onSubmit={registerform.handleSubmit}>
        <div className='row'>
        <div className='col-lg-12'>
            <label>Name</label>
            <input name="name" onChange={registerform.handleChange} value={registerform.values.name} type={'text'} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <label>Email</label>
            <input name="email" onChange={registerform.handleChange} value={registerform.values.email} type={'email'} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <label>Password</label>
            <input name="password" onChange={registerform.handleChange} value={registerform.values.password} type={'password'} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <input type={"submit"} value="Register" className='btn btn-primary mt-2'></input>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register