import styles from './Modal.module.css';
import homeClose from '../../assets/iconHomeOpen.svg';
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import React, { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const Modal = ({ image, backgroundColor, text,  }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [style, api] = useSpring(() => ({
        y: 0,
        config: { tension: 300, friction: 30 },
    }));

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        api.start({ y: 0 });
        setIsModalOpen(false);
    };

    // Gesto para arrastar o modal
    const bind = useDrag(
        ({ down, movement: [, my], cancel, last }) => {
            // Fechar modal se arrastado para baixo além de 100px
            if (my > 100 && last) {
                cancel?.();
                closeModal();
            } else {
                api.start({ y: down ? my : 0 });
            }
        },
        { bounds: { top: 0, bottom: 150 }, rubberband: true }
    );

    return(
        <div className={styles.container} style={{backgroundColor}}>
            <button className={styles.button} onClick={openModal}><img className={styles.icon} src={image}  alt='botão home'/></button>

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
                <animated.div
                    {...bind()}
                    style={{ ...style, touchAction: "none" }}
                    className={styles.modal}
                >
                    <img src={homeClose} alt='botão home'/>
                    <p>{text}</p>
                    <div className={styles.containerButton}>
                        <button className={styles.buttonClose} onClick={CloseEvent}>Sim, sair agora</button>
                        <button className={styles.buttonStay} onClick={closeModal}>Não, quero continuar</button>
                    </div>
                </animated.div>
            </ReactModal>
    </div>
    )
}

export default Modal;