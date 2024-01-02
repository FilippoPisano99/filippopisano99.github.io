import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='
          flex flex-col
          items-center
          p-20 border-4 
          shadow-[10px_10px_0px_0px_rgba(109,40,217)]
          '>
        <span className='text-3xl'>Filippo Pisano</span>
        <span className='text-sm'>Software developer</span>
      </div>
    </main>
  )
}
