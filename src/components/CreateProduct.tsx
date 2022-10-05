import React, { useState } from 'react';

import Modal from './shared/UIElements/Modal';
import Input from './shared/FormElements/Input';

import './CreateProduct.css';

// поля форми для створення продукту ініціалізовані цим текстом щоб не заповнювати форму вручну
const titleForExample = 'John Hardy Women\'s Legends Naga Gold & Silver Dragon Station Chain Bracelet';
const priceForExample = 695;
const descriptionForExample = 'From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean\'s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.';
const categoryForExample = 'jewelery';
const imageForExample = 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg';
const ratingForExample = { "rate": 4.6, "count": 400 };

interface CreateProductProps {
    show: boolean
    onClose: () => void,
    needUpdateHandler: () => void
}

function CreateProduct(props: CreateProductProps) {
    const [titleInput, setTitleInput] = useState(titleForExample);
    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setTitleInput(event.target.value);

    const [categoryInput, setCategoryInput] = useState(categoryForExample);
    const categoryChangeHandler = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setCategoryInput(event.target.value);

    const [descriptionInput, setDescriptionInput] = useState(descriptionForExample);
    const descriptionChangeHandler = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setDescriptionInput(event.target.value);

    const [priceInput, setPriceInput] = useState(priceForExample);
    const priceChangeInput = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setPriceInput(Number(event.target.value));

    const [imageInput, setImageInput] = useState(imageForExample);
    const imageChangeInput = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setImageInput(event.target.value);

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch('http://localhost:5000/api/products', {
            method: 'POST',
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
        setTitleInput('');
        setPriceInput(0);
        setDescriptionInput('');
        setCategoryInput('');
        setImageInput('');
        props.onClose();
        props.needUpdateHandler();
    }

    return (
        <Modal header='Створення продукту' show={props.show} onClose={props.onClose} >
            <form className='create-product__form' onSubmit={submitHandler}>
                <Input element='input' id='title' type='text' onChange={titleChangeHandler} value={titleInput} label='Назва продукту' />
                <Input element='input' id='category' type='text' onChange={categoryChangeHandler} value={categoryInput} label='Категорія' />
                <Input element='textarea' id='description' onChange={descriptionChangeHandler} value={descriptionInput} label='Опис' />
                <Input element='input' id='price' type='text' onChange={priceChangeInput} value={priceInput.toString()} label='Ціна' />
                <Input element='input' id='image' type='text' onChange={imageChangeInput} value={imageInput} label='Зображення (посилання)' />
                <button type="submit" className='create-product__button'>Створити продукт</button>
            </form>
        </Modal>
    );
}

export default CreateProduct;