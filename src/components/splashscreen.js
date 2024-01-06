import Image from 'next/image'

export default function Splashscreen() {
    return (
        <section className='
        w-full h-screen
        flex flex-row
        justify-center'>

        <div className='
          pr-36 pt-96'
          >
          
          <span className="text-white text-6xl font-semibold">Ciao 👋🏻 sono </span>
          <span className="text-primary text-6xl font-semibold">Filippo</span>
          <span className="text-white text-6xl font-semibold">, <br/>
          Coffe lover, Tech nerd e
          <br/>
          Software developer
          </span>


        </div>
        <div className='pt-10'>
          <div className="avatar">
            <div className="bg-primary rounded-full">
              <img src="avatar.png" />
            </div>
          </div>
        </div>

      </section>
        
    )
}