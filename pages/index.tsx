import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import CustomModal from './CustomModal'
import ListOfContacts from '../pages/Ejercicio Bootcamp 1 (React)/ListOfContacts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
     <CustomModal 
     customMessage='Are you sure you wish to disconnect this game from your Quarters account'
     onConfirm={ function() {alert('Confirmed');} }
     />

     <ListOfContacts/>
    </>
  )
}
