import Left from '@/components/Left'
import Image from 'next/image'
import Right from '@/components/Right'
import Song from '@/components/Song'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between ">
      {/* items-center */}
     <div className='grid grid-cols-5 shadow-2xl
     rounded-b-3xl  bg-white '>
       <div className='col-span-1 md:-m-1'><Left/></div>
       <div className='col-span-4  '><Right/></div>
      </div>
      <div className='grid grid-cols-5'>
      <div className='col-span-5 hidden lg:block'><Song/></div>
      </div>
    </main>
  )
}
