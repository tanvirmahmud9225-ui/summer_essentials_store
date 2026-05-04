import { getProducts } from '@/lib/fetchdata';
import React from 'react';
import ProductsCard from './ProductsCard';

const Products = async () => {
    const products = await getProducts();

    return (
        <div className='max-w-7xl w-[95vw] mx-auto my-35'>
            <h1 className='my-10 font-bold text-5xl'>Top Products</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-8'>
                {
                    products.slice(0, 3).map(product => <ProductsCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;