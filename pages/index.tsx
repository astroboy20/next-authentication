import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/layout/layout'
import Link from 'next/link'
import { useState } from 'react'
import {useSession } from "next-auth/react"
import { Session } from 'next-auth'
const inter = Inter({ subsets: ['latin'] })

interface MySession {
  user: {
    name: string;
    email: string;
  }
}

export default function Home() {
  //set the session
  const {data:session} = useSession<MySession>()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

        
        {session ? User({session}) : Guest()}
      
         
     
    </>
  )
}

//Guest
function Guest(){
  return(
    <main className='container mx-auto text-center py-20'> 
        <h3 className='text-4xl font-bold'>Guest Homepage</h3>
       
        
        <div className='flex justify-center'>
          <Link href={'/login'} className='mt-5 px-10 py-1 rounded-sm text-gray-50 bg-indigo-500' >Sign In</Link>
        </div>
      </main>
  )
}

//User
function User({session}){
  return(
    <main className='container mx-auto text-center py-20'> 
        <h3 className='text-4xl font-bold'>Authorize User Homepage</h3>
        <div className="details">
          <h5>{session.user.name}</h5>
          <h5>{session.user.email}</h5>
        </div>

        <div className='flex justify-center'>
          <button className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Sign Out</button>
        </div>
        <div className='flex justify-center'>
          <Link href={'/profile'} className='mt-5 px-10 py-1 rounded-sm text-gray-50 bg-indigo-500' >Profile Page</Link>
        </div>
      </main>
  )
}
