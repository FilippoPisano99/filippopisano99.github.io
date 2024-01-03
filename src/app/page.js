import Image from 'next/image'
import Card from "@/components/card";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className='p-8'>
        
        <div className='
            flex flex-col
            items-center
            p-10 border-4 
            shadow-[10px_10px_0px_0px_rgba(109,40,217)]
            mb-3
            '>
          <span className='text-3xl'>Filippo Pisano</span>
          <span className='text-sm'>Software developer</span>
        </div>
      </section>
      <section className='
        flex flex-wrap
        justify-evenly
      '>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  )
}
