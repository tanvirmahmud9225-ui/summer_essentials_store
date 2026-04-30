import { getProducts } from '@/lib/fetchdata';
import React from 'react';

const TopPages = async () => {
    const products = await getProducts();
    console.log(products);
    return (
        <div>
            <div>

            </div>
        </div>
    );
};

export default TopPages;