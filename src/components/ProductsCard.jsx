import Image from 'next/image';
import React from 'react';

const ProductsCard = ({ product }) => {
    return (
        <div>
            <div>
                <div>
                    <Image src={product.image}  width={50} height={50} alt='' />
                </div>
                <h1>{product.name}</h1>
            </div>
        </div>
    );
};

export default ProductsCard;