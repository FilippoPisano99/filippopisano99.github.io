import Image from 'next/image'

export default function Splashscreen() {
    return (
        <div className='
        w-full h-screen
        items-center
        justify-center
        
        md:flex md:flex-row-reverse        
        '>

        <div className='flex justify-center'>
          <div className="avatar 
          pb-3
          md:w-80 w-2/4
          md:pb-48
          ">
            <div className="bg-primary rounded-full">
              <img src="avatar.png" />
            </div>
          </div>
        </div>

        <div className='
          flex flex-col items-center
          md:pt-20
          md:pr-20 '
          >
          
          <div>
            <span className="
            text-white 
            md:text-5xl text-2xl
            font-semibold">Ciao 👋🏻 sono </span>
            <span className="
            text-primary
            md:text-5xl text-2xl
            font-semibold">Filippo</span>
            <span className="
            text-white 
            md:text-5xl text-2xl
            font-semibold">, <br/>
            Coffe lover, Tech nerd e
            <br/>
            Software developer
            </span>
          </div>


        </div>
        

      </div>
        
    )
}