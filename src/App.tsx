import { useEffect, useState } from 'react';

import Products from './pages/Products';
import Navigation from './components/shared/navigation/Navigation';

import './App.css';

function App() {
    const [needUpdate, setNeedUpdate] = useState(false);
    const needUpdateHandler = () => setNeedUpdate(!needUpdate);
    const [products, setProducts] = useState([])
    useEffect(() => { fetchAPIDAta() }, [])
    const fetchAPIDAta = async () => {
        const response = await fetch('https://store-backend-black.vercel.app/api/products');
        const responseData = await response.json();
        setProducts(responseData)
    }
    return (
        <>
            <Navigation needUpdateHandler={needUpdateHandler} />
            <div className='app__container'>
                <Products needUpdate={needUpdate} needUpdateHandler={needUpdateHandler} />
            </div>
        </>
    );
}

export default App;
