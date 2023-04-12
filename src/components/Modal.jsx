import React from 'react';
import CloseBtn from "../img/cerrar.svg"

const Modal = ({setModal, modalAnimation, setModalAnimation}) => {
    const hideModal = () => {
        setModalAnimation(false)

        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CloseBtn}
                    alt="Close Modal"
                    onClick={hideModal}
                />
            </div>
            <form className={`formulario ${modalAnimation ? 'animar' : 'cerrar'}`}>
                <legend>New Expense</legend>
                <div className="campo">
                    <label htmlFor="nombre">Expense name</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Add expense name"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Quantity</label>
                    <input
                        id="cantidad"
                        type="number"
                        placeholder="Add quantity"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Category</label>
                    <input
                        id="cantidad"
                        type="number"
                        placeholder="Add quantity"
                    />
                </div>
            </form>
        </div>
    );
}

export default Modal;