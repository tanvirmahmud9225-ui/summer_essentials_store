import React from 'react';

const TopBrands = () => {
    return (
        <div>
            <div className='max-w-7xl w-[95vw] mx-auto my-30 p-10 border rounded-xl shadow-lg'>
                <div className='space-y-3 mb-20'>
                    <h1 className='lg:text-6xl text-4xl font-bold'>Top Brands</h1>

                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8'>
                    <div className='text-center p-10 border w-full rounded-2xl bg-amber-100'>
                        <h1 className='font-bold text-3xl mb-2 px-'>WaveRider</h1>
                    </div>
                    <div className='text-center p-10 border w-full rounded-2xl bg-amber-100'>
                        <h1 className='font-bold text-3xl mb-2 px-'>SandyShore</h1>
                    </div>
                    <div className='text-center p-10 border w-full rounded-2xl bg-amber-100'>
                        <h1 className='font-bold text-3xl mb-2 px-'>SunGuard</h1>
                    </div>
                    <div className='text-center p-10 border w-full rounded-2xl bg-amber-100'>
                        <h1 className='font-bold text-3xl mb-2 px-'>FootLoft</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopBrands;