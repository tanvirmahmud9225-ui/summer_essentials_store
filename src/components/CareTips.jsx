import React from 'react';

const CareTips = () => {
    return (
        <div className='max-w-7xl w-[95vw] mx-auto  md:my-15 p-10 border rounded-xl shadow-lg'>
            <div>
                <div className='space-y-3 text-center md:text-left mb-8'>
                    <h1 className='md:text-6xl text-4xl font-bold'>Summer Care Tips</h1>
                    <p className='text-gray-500 text-lg font-semibold'>Stay fresh, healthy & glowing all summer long!</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8'>
                    <div className='text-center  w-full lg:w-50'>
                        <h1 className='font-bold text-2xl mb-2'>Use Sunscreen</h1>
                        <p className=' text-gray-500'>Apply SPF 30 or higher every day, even indoors.</p>
                    </div>
                    <div className='text-center w-full lg:w-50'>
                        <h1 className='font-bold text-2xl mb-2'>Stay Hydrated</h1>
                        <p className=' text-gray-500'>Drink plenty of water throughout the day.</p>
                    </div>
                    <div className='text-center w-full lg:w-50'>
                        <h1 className='font-bold text-2xl mb-2'>Moisturize</h1>
                        <p className=' text-gray-500'>Use a lightweight moisturizer to keep your skin soft & fresh.</p>
                    </div>
                    <div className='text-center w-full lg:w-50'>
                        <h1 className='font-bold text-2xl mb-2'>Protect Yourself</h1>
                        <p className=' text-gray-500'>Wear a hat, sunglasses & light cotton clothes when going out.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareTips;