import { getProducts } from '@/lib/fetchdata';
import React from 'react';
import ProductsCard from './ProductsCard';

const Products = async () => {
    const products = await getProducts();
    console.log(products);
    return (
        <div className='w-7xl mx-auto mt-10'>
            <h1 className='my-5 font-bold text-5xl'>Top Products</h1>
            <div>
                {
                    products.map(product => <ProductsCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;