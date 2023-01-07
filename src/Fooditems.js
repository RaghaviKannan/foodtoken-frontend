import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { config } from './config';

function Fooditems() {
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  useEffect(() => {
    const fetchdata = async () => {
      const id = localStorage.getItem('id');
      const userdata = await axios.get(`${config.api}/user/${id}`)
      setUser(userdata.data[0])
    }
    fetchdata()
  }, [])
  const formik = useFormik({
    initialValues: { tea: 0, coffee: 0, dosa: 0, idly: 0, sambar_rice: 0, curd_rice: 0, vegetable_biryani: 0, chapathi: 0 },
    onSubmit: async (values) => {
      try {
        const user = localStorage.getItem("id")
        const order = await axios.post(`${config.api}/place-order/${user}`, values)
        formik.resetForm()
        alert(order.data.message)
      } catch (error) {
        console.log(error)
      }
    },
  });
  const logout =()=>{
    localStorage.removeItem("id")
    navigate('/')
}
  return (
    <>
      <div style={{ backgroundColor: "turquoise" }} className='container'>
      <button className='btn btn-danger' onClick={logout}>Logout</button>
        <div><h3>Hi {user.name}, Place your order!!🤩</h3>
          <Link style={{color:"green"}} to={'/orders'}>Orders</Link></div>
          
        <h5>Here's your menu🍜</h5>

        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-lg-6'>
              <label>Tea</label>
              <input name="tea" onChange={formik.handleChange} value={formik.values.tea} type={'text'} className='form-control'></input>
            </div>
            <div className='col-lg-6'>
              <label>Coffee</label>
              <input name="coffee" onChange={formik.handleChange} value={formik.values.coffee} type={'text'} className='form-control'></input>
            </div>
            <div className='col-lg-6'>
              <label>Dosa</label>
              <input name="dosa" onChange={formik.handleChange} value={formik.values.dosa} type={'text'} className='form-control'></input>
            </div>
            <div className='col-lg-6'>
              <label>Idly</label>
              <input name="idly" onChange={formik.handleChange} value={formik.values.idly} type={'text'} className='form-control'></input>
            </div>
            <div className='col-lg-6'>
              <label>Sambar rice</label>
              <input name="sambar_rice" onChange={formik.handleChange} value={formik.values.sambar_rice} type={'text'} className='form-control'></input>
            </div>
            <div className='col-lg-6'>
              <label>Curd rice</label>
              <input name="curd_rice" onChange={formik.handleChange} value={formik.values.curd_rice} type={'text'} className='form-control'></input>
            </div>
            <div className='col-lg-6'>
              <label>Vegetable briyani</label>
              <input name="vegetable_biryani" onChange={formik.handleChange} value={formik.values.vegetable_biryani} type={'text'} className='form-control'></input>
            </div>
            <div className='col-lg-6'>
              <label>Chapathi</label>
              <input name="chapathi" onChange={formik.handleChange} value={formik.values.chapathi} type={'text'} className='form-control'></input>
            </div>
            <div className='col-lg-12'>
              <input type={"submit"} value="Place order" className='btn btn-primary mt-2'></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Fooditems