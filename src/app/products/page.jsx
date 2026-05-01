import ProductsCard from '@/components/ProductsCard';
import { getProducts } from '@/lib/fetchdata';
import React from 'react';


const ProductsPage = async () => {
    const products = await getProducts();

    return (
        <div className='w-7xl mx-auto my-20'>
            
            <div className='grid grid-cols-4 gap-8'>
                {
                    products.map(product => <ProductsCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default ProductsPage;