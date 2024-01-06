import Image from 'next/image'

export default function Navbar() {
    return (
        <div className="navbar z-50 sticky top-0 flex flex-row justify-end">
            <ul className="flex">
                <li className="mr-8">
                    <a className="hover:text-primary hover:cursor-pointer  p-2">Progetti</a>
                </li>
                <li className="mr-8">
                    <a className="hover:text-primary hover:cursor-pointer p-2">Contattami</a>
                </li>
            </ul>
        </div>
        
    )
}