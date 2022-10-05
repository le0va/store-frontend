import { useState } from 'react';

import Modal from './shared/UIElements/Modal';
import Input from './shared/FormElements/Input';
import { IProduct } from '../models';

import './ChangeProduct.css';

interface ChangeProductProps {
    product: IProduct
    show: boolean,
    onClose: () => void,
    needUpdateHandler: () => void
}

function ChangeProduct({ product, show, onClose, needUpdateHandler }: ChangeProductProps) {
    const [titleInput, setTitleInput] = useState(product.title);
    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setTitleInput(event.target.value);

    const [categoryInput, setCategoryInput] = useState(product.category);
    const categoryChangeHandler = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setCategoryInput(event.target.value);

    const [descriptionInput, setDescriptionInput] = useState(product.description);
    const descriptionChangeHandler = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setDescriptionInput(event.target.value);

    const [priceInput, setPriceInput] = useState(product.price);
    const priceChangeInput = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setPriceInput(Number(event.target.value));

    const [imageInput, setImageInput] = useState(product.image);
    const imageChangeInput = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setImageInput(event.target.value);

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(`http://localhost:5000/api/products/${product.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: titleInput,
                price: priceInput,
                description: descriptionInput,
                category: categoryInput,
                image: imageInput
            })
        })
        onClose();
        needUpdateHandler();
    }

    return (
        <Modal header='Редагування продукту' show={show} onClose={onClose}>
            <form className='create-product__form' onSubmit={submitHandler}>
                <Input element='input' id='title' type='text' onChange={titleChangeHandler} value={titleInput} label='Назва продукту' />
                <Input element='input' id='category' type='text' onChange={categoryChangeHandler} value={categoryInput} label='Категорія' />
                <Input element='textarea' id='description' onChange={descriptionChangeHandler} value={descriptionInput} label='Опис' />
                <Input element='input' id='price' type='text' onChange={priceChangeInput} value={priceInput.toString()} label='Ціна' />
                <Input element='input' id='image' type='text' onChange={imageChangeInput} value={imageInput} label='Зображення (посилання)' />
                <button type="submit" className='create-product__button'>Зберегти зміни</button>
            </form>
        </Modal>
    );
}

export default ChangeProduct;