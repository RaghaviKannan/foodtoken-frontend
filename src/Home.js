import React from 'react'
import Login from './Login'
import Register from './Register'

function Home() {
  return (
    <>
    <h1 style={{textAlign:"center"}}> Online Food ordering!</h1>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6' style={{textAlign:"center"}}><Register/></div>
        <div className='col-lg-6' style={{textAlign:"center"}}><Login/></div>
      </div>
    </div>
    </>
  )
}

export default Home