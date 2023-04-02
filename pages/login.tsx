import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '@/layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css'
import Image from 'next/image'
import { HiAtSymbol,HiFingerPrint } from "react-icons/hi";
import {useSession,signIn,signOut} from "next-auth/react"
import { useFormik,FormikConfig } from 'formik'
import login_validate from '@/lib/validate'
import { LoginProps } from '@/typing'


const Login = () => {

  //formik as hook 
  const formik = useFormik<LoginProps>({
    initialValues:{
      email:"",
      password:"",
    },
    validate:login_validate,
    onSubmit

  })
  console.log(formik.errors)
  async function onSubmit(values:LoginProps) {
    console.log(values)
  }

  //show and hide password
  const [show, setShow] =useState(false)

  const handleShow = ()=>{
    setShow(!show)
  }
  //Google sign in
  async function handleGoogleSignIn(){
    signIn('google',{callbackUrl:'https://localhost:3000'})
  }

  //Github sihnin
  async function handleGithubSignIn(){
    signIn('github',{callbackUrl:'https://localhost:3000'})
  }
  return (
    

      
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className='w-3/4 mx-auto flex flex-col gap-10'>
        <div className='title'>
            <h1 className='text-gray-800 text-4xl font-bold py-4 '>Explore</h1>
            <p className='w-3/4 mx-auto text-gray-400'> voluptatum, ducimus quis quas numquam nam</p>
        </div>
        {/* form */}
        <form className='flex flex-col gap-5 text-center' onSubmit={formik.handleSubmit}>
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
            <div className={styles.input_group}>
                <input 

                  className={styles.input_text} 
                  type={`${show ? 'text':'password'}`} 
                  placeholder='Password' 
                  {...formik.getFieldProps("password")}/>

                <span className='icon flex items-center px-3' onClick={handleShow}>
                  <HiFingerPrint size={25}/>
                </span>
            </div>
            {/* login buton */}
            <div className="input-button">
                <button type='submit' className={styles.buttton}>Login</button>
            </div>

            <div className="input-button">
                <button type='button'  onClick={handleGoogleSignIn} className={styles.button_custom}>Sign In with Google <Image src='/images/google.svg' width={20} height={20} alt='google'/></button>
            </div>

            <div className="input-button">
                <button type='button' onClick={handleGithubSignIn} className={styles.button_custom}>Sign In with Github <Image src='/images/github.svg' width={25} height={25} alt='github'/></button>
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

export default Login
