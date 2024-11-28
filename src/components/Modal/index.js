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

    const bind = useDrag(
        ({ movement: [, my], last, down, cancel }) => {
            // Se arrastar para cima além de -50px, abre o modal
            if (my < -50 && last) {
                cancel?.();
                openModal();
            }
        },
        { bounds: { top: -150, bottom: 0 }, rubberband: true }
    );

    const bindModal = useDrag(
        ({ movement: [, my], last, down, cancel }) => {
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
            {!isModalOpen && (
                <animated.div
                    {...bind()}
                    className={styles.dragHandle}
                    style={{ touchAction: "none", height: "50px", backgroundColor: "transparent" }}
                >
                    <button className={styles.button} onClick={openModal}><img className={styles.icon} src={image}  alt='botão home'/></button>
                </animated.div>
            )}

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