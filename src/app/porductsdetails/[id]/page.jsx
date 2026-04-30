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
    console.log(product);


    return (
        <div className='w-7xl mx-auto'>
            <div className='p-4 border border-gray-300 rounded-lg grid grid-cols-2 mt-10 '>
                <div className='flex-1 mb-5 relative aspect-square w-120'>
                    <Image
                        className='object-cover rounded-lg'
                        src={product.image}
                        fill
                        alt={product.name} />
                </div>
                <div className='flex-1 space-y-3'>
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