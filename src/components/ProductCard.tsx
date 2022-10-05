import { useState } from 'react';

import ChangeProduct from './ChangeProduct';
import { IProduct } from '../models';

import './ProductCard.css';

interface ProductCardProps {
    product: IProduct,
    needUpdateHandler: () => void
}

function ProductCard({ product, needUpdateHandler }: ProductCardProps) {
    const [isDeleted, setIsDeleted] = useState(false);

    const [showChangeProduct, setShowChangeProduct] = useState(false);
    const openChangeProduct = () => setShowChangeProduct(true);
    const closeChangeProduct = () => setShowChangeProduct(false);

    const deleteProductHandler = () => {
        fetch(`http://localhost:5000/api/products/${product.id}`, {
            method: 'DELETE'
        });
        setIsDeleted(true);
    }

    if (isDeleted) {
        return (<></>);
    }
    else {
        return (
            <div className='product-card__container'>
                <h1 className='product-card__title'>
                    {product.title}
                </h1>
                <img className='product-card__image' src={product.image} alt={product.title} />
                <p className='product-card__price'>
                    {`Price: $${product.price}`}
                </p>
                <div className='product-card__footer'>
                    <ChangeProduct show={showChangeProduct} product={product} onClose={closeChangeProduct} needUpdateHandler={needUpdateHandler} />
                    <button className='product-card__button' onClick={openChangeProduct}>
                        Редагувати
                    </button>
                    <button className='product-card__button delete-button' onClick={deleteProductHandler}>
                        Видалити
                    </button>
                </div>
            </div>
        );
    }
}

export default ProductCard;

