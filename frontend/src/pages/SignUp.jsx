import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'

const SignUp = () => {


  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""

  })


  const { signUp, isSigningUp } = useAuthStore()

  const vlidateForm = () => {

  }



  const handleSubmit = (e) => { e.preventDefault() }


  return (
    <div className='min-h-screen grid lg:grid-cols-2'>


      <div className='flex flex-col justify-center items-center p-6 sm:p-12'>

      </div>


    </div>
  )
}

export default SignUp