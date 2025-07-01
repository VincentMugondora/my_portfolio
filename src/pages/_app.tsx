import type { AppProps } from 'next/app'
import '../styles/index.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-[#111111]'>
      <Navbar />
      <div className='mt-20'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
