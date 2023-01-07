import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { config } from './config'

function Resetpassword() {
    const url = new URL(window.location.href)
    const token = url.searchParams.get("token")
    const formik = useFormik({
        initialValues: {
            password: "",
            confirmpassword: ""
        },
        onSubmit: async (values) => {
            try {
                if (formik.values.password === formik.values.confirmpassword) {
                    const user = await axios.post(`${config.api}/reset-password-page?token=${token}`, values)
                    formik.resetForm()
                    alert(user.data.message)
                }else{
                    alert("Password does not match")
                }
            } catch (error) {
                console.log(error)
                alert(error.response.data.message)
            }
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-12'>
                        <label>Enter a New password</label>
                        <input name="password" onChange={formik.handleChange} value={formik.values.password} type={'password'} className='form-control'></input>
                    </div>
                    <div className='col-lg-12'>
                        <label>Confirm password</label>
                        <input name="confirmpassword" onChange={formik.handleChange} value={formik.values.confirmpassword} type={'password'} className='form-control'></input>
                    </div>
                    <div className='col-lg-12'>
                        <input type={"submit"} value="Submit" className='btn btn-primary mt-2'></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Resetpassword