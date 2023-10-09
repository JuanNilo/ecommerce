import Image from 'next/image'
import HomePage from './components/home/Home'
import Products from './components/home/Products'

export default function Home() {


  return (
    <div
      className=' w-[60%] h-[100%] flex mx-auto bg-white'
    >
      <HomePage/>
    </div>
  )
}
