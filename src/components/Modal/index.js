import styles from './Modal.module.css';
import home from '../../assets/iconHome.svg';
import homeClose from '../../assets/iconHomeOpen.svg';
import React, { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const Modal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return(
        <div className={styles.container}>
            <button className={styles.button} onClick={openModal}><img className={styles.icon} src={home} alt='botão home'/></button>

            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={{
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.0)",
                },
                content: {
                    position: "absolute",
                    bottom: "0",
                    top: "70%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "20px",
                    borderRadius: "10px 10px 0 0",
                    width: "100%",
                    height: "50%",
                },
                }}
            >
                <div className={styles.modal}>
                    <img src={homeClose} alt='botão home'/>
                    <p>Você, realmente, deseja sair do Poundsflats?</p>
                    <div className={styles.containerButton}>
                        <button className={styles.buttonClose} onClick={CloseEvent}>Sim, sair agora</button>
                        <button className={styles.buttonStay} onClick={closeModal}>Não, quero continuar</button>
                    </div>
                </div>
            </ReactModal>
    </div>
    )
}

export default Modal;