import { getProducts } from '@/lib/fetchdata';
import { Separator } from '@heroui/react';
import { CloudSnow } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { FaHeart } from 'react-icons/fa';

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;
    const products = await getProducts();
    console.log(products);

    const product = products.find(p => p.id == id);



    return (
        <div className='w-7xl mx-auto shadow-lg border border-gray-200 rounded-lg mt-15'>
            <div className='p-10  grid grid-cols-2 gap-15'>
                <div className='border p-15 rounded-lg'>
                    <div className='relative aspect-square rounded-xl'>
                        <Image
                            className='object-cover rounded-xl w-40'
                            src={product.image}
                            fill
                            alt={product.name} />
                    </div>
                </div>
                <div className='space-y-3'>
                    <h1 className='font-bold text-lg'>{product.name}</h1>
                    <div className='flex items-center gap-5 '>
                        <div className='font-semibold text-lg flex items-center gap-2'>
                            <FaHeart />
                            <span>300</span>
                        </div>
                        <Separator orientation='vertical' />
                        <div>
                            <span className='font-semibold text-lg'>$ 2300</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;