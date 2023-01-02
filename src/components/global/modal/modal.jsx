import Card from "../card/card";
import styles from "./modal.module.scss";

const Modal = ({children, className, onClose = () => {}}) => {

    const stopPropagation = (event) => {
        event.stopPropagation()
    }

    return (
        <div className={styles.modal} onClick={onClose}>
            <Card 
                className={`${styles.modal_body} ${className}`} 
                onClick={stopPropagation}
            >
                {children}
            </Card>
        </div>
    )
}

export default Modal;