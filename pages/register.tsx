import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '@/layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css'
import Image from 'next/image'
import { HiAtSymbol,HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useFormik } from 'formik'
import {RegisterProps} from "@/typing"
import { register_validate } from '@/lib/validate'

const Register = () => {
  //show and hide password
  const [show,setShow] = useState({
    password:false,
    cpassword:false
  })
//initialize the formik hook
  const formik = useFormik<RegisterProps>({
    initialValues:{
      username:"",
      email:"",
      password:"",
      cpassword:""
    },validate:register_validate
    ,onSubmit
  })
  async function onSubmit(values:RegisterProps){
    console.log(values)
  }
  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <section className='w-3/4 mx-auto flex flex-col gap-10'>
        <div className='title'>
            <h1 className='text-gray-800 text-4xl font-bold py-4 '>Register</h1>
            <p className='w-3/4 mx-auto text-gray-400'> voluptatum, ducimus quis quas numquam nam</p>
        </div>
        {/* form */}
        <form className='flex flex-col gap-5 text-center' onSubmit={formik.handleSubmit}>
            <div className={styles.input_group}>
                <input 
                  className={styles.input_text} 
                  type="text" 
                  placeholder='Username' 
                  //it takes all the value of the input and updates it
                  {...formik.getFieldProps("username")}/>
                <span className='icon flex items-center px-3'>
                  <HiOutlineUser size={25}/>
                </span>
            </div>
            {formik.errors.username && formik.touched.username ? <span>{formik.errors.username}</span>:<></>}
            <div className={styles.input_group}>
                <input 
                  className={styles.input_text} 
                  type="email" 
                  placeholder='Email' 
                  {...formik.getFieldProps("email")}/>
                <span className='icon flex items-center px-3'>
                  <HiAtSymbol size={25}/>
                </span>
            </div>
            {formik.errors.email && formik.touched.email ? <span>{formik.errors.email}</span>:<></>}
            <div className={styles.input_group}>
                <input 
                  className={styles.input_text} 
                  type={`${show.password ? 'text':'password'}`}
                  placeholder='Password'
                  {...formik.getFieldProps("password")} />
                <span className='icon flex items-center px-3'  onClick={()=> setShow({...show,password:!show.password})}>
                  <HiFingerPrint size={25}/>
                </span>
            </div>
            {formik.errors.password && formik.touched.password ? <span>{formik.errors.password}</span>:<></>}
            <div className={styles.input_group}>
                <input 
                  className={styles.input_text} 
                  type={`${show.cpassword ? 'text':'password'}`} 
                  placeholder='Confirm Password'
                  {...formik.getFieldProps("cpassword")} />
                <span className='icon flex items-center px-3' onClick={()=>setShow({...show,cpassword:!show.cpassword})}>
                  <HiFingerPrint size={25}/>
                </span>
            </div>
            {formik.errors.cpassword && formik.touched.cpassword ? <span>{formik.errors.cpassword}</span>:<></>}
            {/* login buton */}
            <div className="input-button">
                <button type='submit' className={styles.buttton}>Sign Up</button>
            </div>
            
        </form>
        {/* bottom */}
        <p className='text-center text-gray-400'>
            dont have an account yet? <Link className='text-blue-700' href={'/register'}>Sign Up</Link>
        </p>
      </section>

    </Layout>
  )
}

export default Register
