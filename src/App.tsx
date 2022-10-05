import { useState } from 'react';

import Products from './pages/Products';
import Navigation from './components/shared/navigation/Navigation';

import './App.css';

function App() {
    const [needUpdate, setNeedUpdate] = useState(false);
    const needUpdateHandler = () => setNeedUpdate(!needUpdate);

    return (
        <>
            <Navigation needUpdateHandler={needUpdateHandler} />
            <div className='app__container'>
                <Products needUpdate={needUpdate} needUpdateHandler={needUpdateHandler}/>
            </div>
        </>
    );
}

export default App;
