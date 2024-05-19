import react from react;
import Modal from 'react-modal';
import style from './cchhaatt.css';

function App(){
    return (
        <Modal 
        isOpen = {true}
        className = "modal-content"
        overlayClassName = "modal-overlay"
        >
            모달입니다.
        </Modal>
    )
}