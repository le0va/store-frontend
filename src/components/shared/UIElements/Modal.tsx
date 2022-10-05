import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";

import './Modal.css';

interface ModalContentProps {
    children: JSX.Element | JSX.Element[]
    header: string
}
interface ModalProps extends ModalContentProps {
    onClose: () => void,
    show: boolean
}

function ModalContent({ children, header }: ModalContentProps) {
    const content = (
        <div className="modal">
            <header className="modal__header">{header}</header>
            <div className="modal__content">
                {children}
            </div>
        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('modal-hook') as Element);
}

function Modal({ show, children, header, onClose, }: ModalProps) {
    return (
        <>
            {show && <Backdrop onClick={onClose} />}
            {show && <ModalContent children={children} header={header}/>}
        </>
    );
}

export default Modal;