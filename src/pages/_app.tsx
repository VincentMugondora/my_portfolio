import type { AppProps } from 'next/app'
import '../styles/index.css'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-[#111111]'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
