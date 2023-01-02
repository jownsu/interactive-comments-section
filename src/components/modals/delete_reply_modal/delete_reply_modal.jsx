import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { DangerButton, GreyButton } from "../../global/buttons/button";
import { hideDeleteReplyModal } from "../../../__reducers/modal/modal.reducer";
import { deleteReply } from "../../../__reducers/comments/comments.reducer";
import Modal from "../../global/modal/modal";
import styles from "./delete_reply_modal.module.scss";

const DeleteReplyModal = () => {
    
    const dispatch = useDispatch();
    const { deleteCommentId, deleteReplyId } = useSelector(state => state.modal);

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(deleteReply({comment_id: deleteCommentId, id: deleteReplyId}));
        dispatch(hideDeleteReplyModal());
    }

    const hideModalHandler = () => {
        dispatch(hideDeleteReplyModal());
    }

    return (
        ReactDOM.createPortal(
            <Modal className={styles.delete_modal} onClose={hideModalHandler} >
                <h3>Delete Reply</h3>
                <p>Are you sure you want to delete this reply? This will remove the reply and can't be undone.</p>
                <form action="#" onSubmit={submitHandler}>
                    <GreyButton text="No, Cancel" onClick={hideModalHandler} />
                    <DangerButton type="submit" text="Yes, Delete" />
                </form>
            </Modal>, 
            document.getElementById("modal-root")
        )
    )
}

export default DeleteReplyModal;