import React from 'react'
import Head from 'next/head'
import Layout from '@/layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css'
const Login = () => {
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
        <form className='flex flex-col gap-5 text-center'>
            <div className={styles.input_group}>
                <input className={styles.input_text} type="email" name='email' placeholder='Email' />
            </div>
            <div className={styles.input_group}>
                <input className={styles.input_text} type="password" name='password' placeholder='Password' />
            </div>
            {/* login buton */}
            <div className="input-button">
                <button type='submit'>Login</button>
            </div>

            <div className="input-button">
                <button type='submit'>Sign In with Google</button>
            </div>

            <div className="input-button">
                <button type='submit'>Sign In with Github</button>
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
