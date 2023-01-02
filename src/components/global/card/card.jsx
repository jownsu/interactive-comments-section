import styles from "./card.module.scss";

const Card = (props) => {

    const {
        children, 
        className,
        onClick = () => {}
    } = props;

    return (
        <div 
            className={`${styles.card} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Card