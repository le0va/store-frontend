import { useState, useEffect } from 'react';

import ProductCard from '../components/ProductCard';
import { IProduct } from '../models';

interface ProductsProps {
    needUpdate: boolean,
    needUpdateHandler: () => void
}

function Products(props : ProductsProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [loadedProducts, setLoadedProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const sendRequest = async () => {
            setIsLoading(true);
            const response = await fetch('https://store-backend-black.vercel.app/api/products');
            const responseData = await response.json();
            setLoadedProducts(responseData.products);
            setIsLoading(false);
        }
        sendRequest();
    }, [props.needUpdate]);

    return (
        <div>
            {isLoading && <h1>Loading ...</h1>}
            {loadedProducts.map(product => <ProductCard product={product} key={product.id} needUpdateHandler={props.needUpdateHandler}/>)}
        </div>
    );
}

export default Products;
