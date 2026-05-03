
import PriceIncreaseDecreas from '@/components/PriceIncreaseDecreas';
import { getProducts } from '@/lib/fetchdata';
import { Button, Separator } from '@heroui/react';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import React from 'react';


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
                <div className='space-y-4'>
                    <h1 className='font-bold text-2xl'>{product.name}</h1>
                    <p>{product.description}</p>
                    <p> <span className='font-bold'>Price:</span> <span>${product.price}</span></p>
                    <p><span className='font-bold'>Stock: </span><span>{product.stock}</span></p>
                    <div className='flex items-center gap-4'>
                        <div className=''>
                            <PriceIncreaseDecreas />
                        </div>
                        <div>
                            <Button variant='danger' className="text-xl font-bold p-5.5 rounded-lg">+ Add To Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;