import { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementScore, decrementScore, updateComment } from "../../__reducers/comments/comments.reducer";
import { showDeleteCommentModal } from "../../__reducers/modal/modal.reducer";
import Card from "../global/card/card";
import Score from "../score/score";
import Avatar from "../avatar/avatar"
import ReplyList from "../replies/reply_list";
import { ReplyAction, DeleteAction, EditAction } from "../actions/action";
import UpdateForm from "../forms/update_form/update_form";
import styles from "./comment_item.module.scss";
import { CURRENT_USER } from "../../assets/data/constants";


const CommentItem = ({comment}) => {
    const { 
        content, 
        user, 
        createdAt,
        score,
        id
    } = comment;

    const [showReplyForm, setShowReplyForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    const dispatch = useDispatch();

    const clickPlusHandler = () => {
        dispatch(incrementScore({comment_id: id}));
    }

    const clickMinusHandler = () => {
        if(score > 0){
            dispatch(decrementScore({comment_id: id}));
        } 
    }

    const clickReplyHandler = () => {
        setShowReplyForm(prevShow => !prevShow);
    }

    const clickDeleteHandler = () => {
        dispatch(showDeleteCommentModal(id))
    }

    const clickEditHandler = () => {
        setShowUpdateForm(true);
    }
    
    const submitUpdateHandler = (newContent) => {
        setShowUpdateForm(false);
        dispatch(updateComment({id, newContent}));
    }

    const cancelUpdateHandler = () => {
        setShowUpdateForm(false);
    }

    return (
        <div className={styles.comment_container}>
            <Card className={styles.comment}>
                <Score 
                    score={score} 
                    onPlusClick={clickPlusHandler}    
                    onMinusClick={clickMinusHandler}  
                    className={styles.comment_score}  
                />
                <div className={styles.comment_user}>
                    <Avatar 
                        url={user.image} 
                        username={user.username} 
                    />
                    <p className={styles.comment_created_at}>{createdAt}</p>
                </div>
                <div className={styles.comment_actions}>
                    <ReplyAction 
                        onClick={clickReplyHandler} 
                        disabled={showReplyForm}
                    />
                    { user.username === CURRENT_USER.username &&
                        <>
                            <EditAction onClick={clickEditHandler} />                            
                            <DeleteAction onClick={clickDeleteHandler} />                            
                        </>
                    }
                </div>

                <div className={styles.comment_content}>
                    {
                        showUpdateForm 
                        ? <UpdateForm 
                            value={content} 
                            onSubmit={submitUpdateHandler}
                            onCancel={cancelUpdateHandler}
                        />
                        : <p>{content}</p>
                    }
                </div>
     
            </Card>
            { showReplyForm && <ReplyList replies={comment.replies} comment_id={id} /> }
        </div>
    )
}

export default CommentItem;