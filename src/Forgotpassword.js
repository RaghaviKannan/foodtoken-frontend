import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { config } from './config'

function Forgotpassword() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: ""
        },
        onSubmit: async (values) => {
            try {
                const user = await axios.post(`${config.api}/user/forgotpassword`, values)
                formik.resetForm()
                alert(user.data.message)
            } catch (error) {
                alert(error.response.data.message)
            }
        }
    })
    const loginpage =()=>{
        navigate('/')
    }
    return (
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-12'>
                        <label>Email</label>
                        <input name="email" onChange={formik.handleChange} value={formik.values.email} type={'email'} className='form-control'></input>
                    </div>
                    <div className='col-lg-12'>
                        <input type={"submit"} value="Submit" className='btn btn-primary mt-2'></input>
                    </div>
                    <div className='col-lg-12'>
                        <input onClick={loginpage} type={"submit"} value="Go back to login page" className='btn btn-primary mt-2'></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Forgotpassword