import Image from 'next/image'
import Card from "@/components/card";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory">
      
      <Navbar/>

      <section 
        id='SPLASHPAGE'
        className='
          snap-start
          w-full h-screen
        bg-slate-600 p-24'>
        
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


      <section 
        id='PROJECTS'
        className='
          w-full h-screen
          snap-start
          bg-slate-700
          pt-24
          p-8
          text-center'
      >
        <span className='text-xl'>My projects:</span>
        <div className='
        flex flex-wrap
        mt-3
        justify-evenly'
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  )
}
