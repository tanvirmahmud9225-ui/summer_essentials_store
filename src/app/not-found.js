import { Button } from '@heroui/react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='h-[70vh] flex justify-center items-center'>
            <div className='text-center space-y-4'>
                <h2 className='text-5xl font-bold'>Not Found</h2>
                <p className='text-4xl font-bold'>Could not find requested resource</p>
                <Link href="/" className='mx-auto font-bold text-2xl py-1 w-60 rounded-3xl cursor-pointer bg-blue-800 text-white block pointer-none'>Go Back Home</Link>
            </div>
        </div>
    )
}