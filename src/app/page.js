import Image from 'next/image'
import Card from "@/components/card";
import Navbar from "@/components/navbar";
import Splashscreen from '@/components/splashscreen';
import Projectscreen from '@/components/projectScreen';

export default function Home() {
  return (
    <main className="max-h-screen">
        <Navbar/>
        <Splashscreen/>
        <Projectscreen></Projectscreen>
    </main>
  )
}
