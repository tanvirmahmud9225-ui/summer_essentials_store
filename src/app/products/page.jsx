import ProductsCard from '@/components/ProductsCard';
import { getProducts } from '@/lib/fetchdata';
import React from 'react';


const ProductsPage = async () => {
    const products = await getProducts();

    return (
        <div className='max-w-7xl w-[95vw] mx-auto my-20'>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-8'>
                {
                    products.map(product => <ProductsCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default ProductsPage;