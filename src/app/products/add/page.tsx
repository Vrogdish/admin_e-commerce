import AddForm from '@/components/AddForm'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <main>
        <Link href={"/products"} className='flex items-center gap-6 m-10'>
            <Image src={"/icons/arrow.png"} alt='retour' width={30} height={30} className='rotate-180'/>
            <p>Retour à la liste des produits</p>
        </Link >
        <AddForm/>
    </main>
  )
}
