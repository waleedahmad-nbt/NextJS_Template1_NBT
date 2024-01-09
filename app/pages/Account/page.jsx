import React from 'react'
import SignIn from './SignIn'
import { Register } from './Register'

const page = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex lg:flex-row flex-col mt-24'>
        <SignIn />
        <Register />
      </div>
    </div>
  )
}

export default page
