import styles from "./button.module.scss";

export const PrimaryButton = (props) => {

    const {
        text, 
        disabled = false, 
        type= "button",
        tabIndex="0",
        onClick = () => {}
    } = props;

    return (
        <button 
            type={type} 
            disabled={disabled}
            onClick={onClick}
            className={`${styles.btn} ${styles.primary}`}
            tabIndex={tabIndex}
        >
            {text}
        </button>
    )
}
export const DangerButton = (props) => {

    const {
        text, 
        disabled = false, 
        type= "button",
        tabIndex="0",
        onClick = () => {}
    } = props;

    return (
        <button 
            type={type} 
            disabled={disabled}
            onClick={onClick}
            className={`${styles.btn} ${styles.danger}`}
            tabIndex={tabIndex}
        >
            {text}
        </button>
    )
}

export const GreyButton = (props) => {

    const {
        text, 
        disabled = false, 
        type= "button",
        tabIndex="0",
        onClick = () => {}
    } = props;

    return (
        <button 
            type={type} 
            disabled={disabled}
            onClick={onClick}
            className={`${styles.btn} ${styles.grey}`}
            tabIndex={tabIndex}
        >
            {text}
        </button>
    )
}

