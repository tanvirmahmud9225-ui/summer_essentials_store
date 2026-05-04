import Image from 'next/image';
import React from 'react';
import bannerImg from "../../public/banner.png"
import { Button } from '@heroui/react';
import { FaArrowRight } from 'react-icons/fa';


const Banner = () => {
    return (
        <div className='max-w-7xl w-[95vw] mx-auto mt-15'>
            <div className='flex flex-wrap md:gap-8 gap-5 justify-between items-center bg-linear-to-r from-cyan-700 to-blue-950 rounded-lg p-10' >
                <div className='lg:flex-1 items-center flex '>
                    <div className='space-y-6'>
                        <h1 className='text-white font-bold '><span className=' bg-linear-to-l from-cyan-600 to-amber-300 text-transparent bg-clip-text md:text-8xl text-6xl italic'>SunCart</span> <br /> <span className='md:text-7xl text-4xl'>Summer Store</span></h1>
                        <p className='text-gray-200'>Stay cool, stylish, and summer-ready with SunCart! Discover a curated collection of must-have seasonal essentials—from trendy sunglasses and breezy outfits to skincare and beach accessories—all in one place.</p>
                        <Button size='lg' className={'px-6 py-6 flex items-center gap-5 italic bg-blue-600 font-bold'}><span className='text-xl'>SHOP NOW</span><FaArrowRight className='size-5' /> </Button>
                    </div>
                </div>
                <div className='flex-1 '>
                    <Image
                        src={bannerImg}
                        alt="Summer beach background"
                        width={1000}
                        height={0}
                        className="object-cover mx-auto w-[90%]"
                    />
                </div>
            </div>
        </div >
    );
};

export default Banner;