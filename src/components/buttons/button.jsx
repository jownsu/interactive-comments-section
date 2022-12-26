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

