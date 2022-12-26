import ReplyIcon from "../../assets/images/icon-reply.svg";
import EditIcon from "../../assets/images/icon-edit.svg";
import DeleteIcon from "../../assets/images/icon-delete.svg";
import styles from "./action.module.scss";

export const ReplyAction = (props) => {
    const {
        onClick = () => {},
        disabled = false
    } = props;

    return (    
        <button 
            type="button"
            className={`${styles.action} ${styles.primary}`} 
            disabled={disabled}
            onClick={onClick}
        >
            <img src={ReplyIcon} alt="reply icon" />
            Reply
        </button>
    )
}

export const EditAction = (props) => {
    const {
        onClick = () => {},
        disabled = false
    } = props;

    return (    
        <button 
            type="button"
            className={`${styles.action} ${styles.primary}`}
            disabled={disabled}
            onClick={onClick}
        >
            <img src={EditIcon} alt="edit icon" />
            Edit
        </button>
    )
}

export const DeleteAction = (props) => {
    const {
        onClick = () => {},
        disabled = false
    } = props;

    return (    
        <button 
            type="button"
            className={`${styles.action} ${styles.danger}`}
            disabled={disabled}
            onClick={onClick}
        >
            <img src={DeleteIcon} alt="delete icon" />
            Delete
        </button>
    )
}