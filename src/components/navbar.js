import Image from 'next/image'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 sticky top-0">
            <a className="btn btn-ghost text-xl">FP</a>
        </div>
        
    )
}
/*
<div className='flex justify-between p-4 sticky top-0 '>
            <span className=' bg-primary  p-2'><a href='#SPLASHPAGE'>FP</a></span>


            <ul class="flex">
                <li class="mr-6">
                    <a class="hover:bg-primary p-2" href="#PROJECTS">Projects</a>
                </li>
                <li class="mr-6">
                    <a class="hover:bg-primary p-2" href="#ABOUT">About</a>
                </li>
                <li class="mr-6">
                    <a class="hover:bg-primary p-2" href="#CONTACT">Contact</a>
                </li>
            </ul>
        </div>
        */