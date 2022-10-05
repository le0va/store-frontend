import { useState } from 'react';

import CreateProduct from '../../CreateProduct';

import './Navigation.css';

interface NavigationProps {
    needUpdateHandler: () => void;
}

function Navigation(props: NavigationProps) {
    const [showModal, setShowModal] = useState(false);
    const openModalHandler = () => setShowModal(true);
    const closeModalHandler = () => setShowModal(false);

    return (
        <header className="navigation__header">
            <CreateProduct show={showModal} onClose={closeModalHandler} needUpdateHandler={props.needUpdateHandler} />
            <button className='navigation__button' onClick={openModalHandler}>Створити продукт</button>
        </header>
    );
}

export default Navigation;