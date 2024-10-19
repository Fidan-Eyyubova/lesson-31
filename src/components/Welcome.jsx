import React from 'react'

const Welcome = () => {
  return (
    <div className='welcome'>
     <div className="position-relative overflow-hidden p-3 p-md-5  text-center">
  <div className="col-md-6 p-lg-5 mx-auto my-5">
    <h1 className="display-3 fw-bold">Welcome to our website!</h1>
    <button className='my-4'>
      More Information 
    </button>
  </div>
  <div className="product-device shadow-sm d-none d-md-block" />
  <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
</div>

    </div>
  )
}

export default Welcome
