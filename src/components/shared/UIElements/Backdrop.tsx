import ReactDOM from 'react-dom';

import './Backdrop.css';

interface BackdropProps {
    onClick: () => void
}

function Backdrop(props: BackdropProps) {
    return ReactDOM.createPortal(<div className='backdrop' onClick={props.onClick}/>, document.getElementById('backdrop-hook') as Element);
}

export default Backdrop;