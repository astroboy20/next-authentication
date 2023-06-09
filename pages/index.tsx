import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/layout/layout'
import Link from 'next/link'
import {getSession, signOut, useSession } from "next-auth/react"
import { Session } from 'next-auth'
import { NextApiRequest, NextPageContext } from 'next'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

interface MySession {
  user: {
    name: string;
    email: string;
  }
}


interface Props {
  session: Session | null;
}

export default function Home() {
  const router = useRouter()
  //set the session
  const {data:session} = useSession<any>()

  //handlesign out
  function handleSignOut(){
    signOut()
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

        
        {session ? User({session,handleSignOut}) : Guest()}
      
         
     
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
function User({session,handleSignOut}:any){
  return(
    <main className='container mx-auto text-center py-20'> 
        <h3 className='text-4xl font-bold'>Authorize User Homepage</h3>
        <div className="details">
          <h5>{session.user.name}</h5>
          <h5>{session.user.email}</h5>
        </div>

        <div className='flex justify-center'>
          <button onClick={handleSignOut} className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Sign Out</button>
        </div>
        <div className='flex justify-center'>
          <Link href={'/profile'} className='mt-5 px-10 py-1 rounded-sm text-gray-50 bg-indigo-500' >Profile Page</Link>
        </div>
      </main>
  )
}


  

//protect url
//this session will create aan home page when there is a session else it returns to the login page 
export async function getServerSideProps(context: NextPageContext){
  //gets the session
  const session = await getSession({ req:context.req })
  //if there is no session
  if(!session){
    return {
      redirect : {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }

}
