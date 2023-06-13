import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import MainBody from '../components/MainBody'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {

    useEffect(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", "light");
      }
    }, []);

  return (
      <div className={`${inter.className} h-screen w-full bg-gradient-to-br from-emerald-100 via-blue-50 to-rose-100`}>
        <Header />
        <MainBody />
      </div> 
  );
}
