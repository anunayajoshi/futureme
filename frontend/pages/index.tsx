import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import MainBody from '../components/MainBody'

const inter = Inter({ subsets: ['latin'] })
localStorage.theme = "light";
export default function Home() {
  return (
      <div className={`${inter.className} h-screen w-full bg-gradient-to-br from-emerald-100 via-blue-50 to-rose-100`}>
        <Header />
        <MainBody />
      </div> 
  );
}
