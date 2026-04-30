import { Button, Chip, Separator } from '@heroui/react';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';

const ProductsCard = ({ product }) => {
    return (
        <div>
            <div className='p-4 border border-gray-300 rounded-lg flex flex-col'>
                <div className='flex-1 mb-5 relative aspect-square w-full'>
                    <Image
                        className='object-cover rounded-lg'
                        src={product.image}
                        fill
                        alt={product.name}
                        sizes="(max-width: 768px) 100vw, 33vw" />
                    <Chip className='right-2 top-2 absolute' variant="primary">
                        {product.brand}
                    </Chip>
                </div>
                <div className='flex-1 space-y-3'>
                    <Chip variant="primary">
                        {product.brand}
                    </Chip>
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
                    <Link href={`/porductsdetails/${product.id}`}
                        className='bg-blue-600 text-white font-bold py-2 w-full block text-center rounded-3xl cursor-pointer hover:bg-blue-500 hover:text-base-200'>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;