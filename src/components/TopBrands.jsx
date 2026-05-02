import React from 'react';

const TopBrands = () => {
    return (
        <div>
            <div className='w-7xl mx-auto my-30 p-10 border rounded-xl shadow-lg'>
                <div className='space-y-3 mb-20'>
                    <h1 className='text-6xl font-bold'>Top Brands</h1>

                </div>
                <div className='flex justify-between gap-8'>
                    <div className='text-center p-10 border rounded-2xl bg-amber-100'>
                        <h1 className='font-bold text-3xl mb-2 px-'>WaveRider</h1>
                    </div>
                    <div className='text-center p-10 border rounded-2xl bg-amber-100'>
                        <h1 className='font-bold text-3xl mb-2 px-'>SandyShore</h1>
                    </div>
                    <div className='text-center p-10 border rounded-2xl bg-amber-100'>
                        <h1 className='font-bold text-3xl mb-2 px-'>SunGuard</h1>
                    </div>
                    <div className='text-center p-10 border rounded-2xl bg-amber-100'>
                        <h1 className='font-bold text-3xl mb-2 px-'>FootLoft</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopBrands;