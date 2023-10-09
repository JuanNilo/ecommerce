import Image from 'next/image'
import HomePage from './components/home/Home'
import Products from './components/home/Products'

export default function Home() {


  return (
    <div
      className=' w-[100%] 2xl:w-[80%] h-[100%] flex mx-auto'
    >
      <HomePage/>
    </div>
  )
}
