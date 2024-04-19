import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { auth } from '../auth'
import img from '@/public/images/a1611060986_65.jpeg'



export default async function Home() {
    const session = await auth()

  return (
    <main className='relative h-screen'>
      <h1> Hello {session && <span> {session.user!.name} </span>} </h1>
      <Link href='/users'>Users</Link>
      <ProductCard />

      {/* Using images */}
      <Image 
        src="https://bit.ly/4b4N9V1" 
        alt='nextjslogo' 
       fill
       className='object-cover'

          //  tablet-breakpoint 
          // mobile breakpoint
          // other screens breakpoint
       sizes='
        (max-width: 480px) 100vw, 
        (max-width: 768px) 50vw, 
        33vw'
        quality={100}
        priority
        />
    </main>
  )

}
