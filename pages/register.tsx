import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '@/layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css'
import Image from 'next/image'
import { HiAtSymbol,HiFingerPrint, HiOutlineUser } from "react-icons/hi";

const Register = () => {
  const [show,setShow] = useState({
    password:false,
    cpassword:false
  })


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
        <form className='flex flex-col gap-5 text-center'>
            <div className={styles.input_group}>
                <input className={styles.input_text} type="text" name='Username' placeholder='Username' />
                <span className='icon flex items-center px-3'>
                  <HiOutlineUser size={25}/>
                </span>
            </div>
            <div className={styles.input_group}>
                <input className={styles.input_text} type="email" name='email' placeholder='Email' />
                <span className='icon flex items-center px-3'>
                  <HiAtSymbol size={25}/>
                </span>
            </div>
            <div className={styles.input_group}>
                <input className={styles.input_text} type={`${show.password ? 'text':'password'}`} name='password' placeholder='Password' />
                <span className='icon flex items-center px-3'  onClick={()=> setShow({...show,password:!show.password})}>
                  <HiFingerPrint size={25}/>
                </span>
            </div>
            <div className={styles.input_group}>
                <input className={styles.input_text} type={`${show.cpassword ? 'text':'password'}`} name='cpassword' placeholder='Confirm Password' />
                <span className='icon flex items-center px-3' onClick={()=>setShow({...show,cpassword:!show.cpassword})}>
                  <HiFingerPrint size={25}/>
                </span>
            </div>
            {/* login buton */}
            <div className="input-button">
                <button type='submit' className={styles.buttton}>Login</button>
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
