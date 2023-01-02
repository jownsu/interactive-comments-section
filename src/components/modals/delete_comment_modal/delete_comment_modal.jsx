import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { DangerButton, GreyButton } from "../../global/buttons/button";
import { hideDeleteCommentModal } from "../../../__reducers/modal/modal.reducer";
import { deleteComment } from "../../../__reducers/comments/comments.reducer";
import Modal from "../../global/modal/modal";
import styles from "./delete_comment_modal.module.scss";

const DeleteCommentModal = () => {
    
    const dispatch = useDispatch();
    const { deleteCommentId } = useSelector(state => state.modal);

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(deleteComment(deleteCommentId));
        dispatch(hideDeleteCommentModal());
    }

    const hideModalHandler = () => {
        dispatch(hideDeleteCommentModal());
    }

    return (
        ReactDOM.createPortal(
            <Modal className={styles.delete_modal} onClose={hideModalHandler} >
                <h3>Delete Comment</h3>
                <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                <form action="#" onSubmit={submitHandler}>
                    <GreyButton text="No, Cancel" onClick={hideModalHandler} />
                    <DangerButton type="submit" text="Yes, Delete" />
                </form>
            </Modal>, 
            document.getElementById("modal-root")
        )
    )
}

export default DeleteCommentModal;