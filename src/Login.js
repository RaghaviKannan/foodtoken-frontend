import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { config } from './config'

function Login() {
  const navigate = useNavigate()
  const loginform = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const user = await axios.post(`${config.api}/user/login`, values)
        if (user.data.message == "Success") {
          localStorage.setItem("id",user.data.id)
          navigate(`/fooditems`)
        } else {
          alert(user.data.message)
          loginform.resetForm()
        }
      } catch (error) {
        alert(error.response.data.message)
      }
    }
  })
  return (
    <div className='container'>
      <h3>Login</h3>
      <form onSubmit={loginform.handleSubmit}>
        <div className='row'>
          <div className='col-lg-12'>
            <label>Email</label>
            <input name="email" onChange={loginform.handleChange} value={loginform.values.email} type={'email'} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <label>Password</label>
            <input name="password" onChange={loginform.handleChange} value={loginform.values.password} type={'password'} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <input type={"submit"} value="Login" className='btn btn-primary mt-2'></input>
          </div>
          <Link to={'/user/forgotpassword'}>Forgot password</Link>
        </div>
      </form>
    </div>
  )
}

export default Login