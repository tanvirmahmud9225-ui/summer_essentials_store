import { getProducts } from '@/lib/fetchdata';
import React from 'react';
import ProductsCard from './ProductsCard';

const Products = async () => {
    const products = await getProducts();

    return (
        <div className='w-7xl mx-auto my-35'>
            <h1 className='my-10 font-bold text-5xl'>Top Products</h1>
            <div className='grid grid-cols-4 gap-8'>
                {
                    products.slice(0, 4).map(product => <ProductsCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;