import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/Components/views/Header'
import Hero from '@/Components/views/Hero'
import Footer from '@/Components/views/Footer'
import Mobile from '@/Components/views/Mobile'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
       <main className=''>
       <Header />
     {    /*<Mobile />*/}
        {children}
        <Footer />
       </main>
         
      {/*Homepage*/}
     
      
</body>

    </html>
  )
}