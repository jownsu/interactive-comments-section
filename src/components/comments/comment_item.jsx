import { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementScore, decrementScore } from "../../__reducers/comments/comments.reducer";
import { showDeleteCommentModal } from "../../__reducers/modal/modal.reducer";
import Card from "../global/card/card";
import Score from "../score/score";
import Avatar from "../avatar/avatar"
import ReplyList from "../replies/reply_list";
import { ReplyAction, DeleteAction, EditAction } from "../actions/action";
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

    return (
        <div className={styles.comment_container}>
            <Card className={styles.comment}>
                <Score 
                    score={score} 
                    onPlusClick={clickPlusHandler}    
                    onMinusClick={clickMinusHandler}    
                />
                <div className={styles.comment_main}>
                    <div className={styles.comment_header}>
                        <Avatar 
                            url={user.image} 
                            username={user.username} 
                        />
                        <p className={styles.comment_created_at}>{createdAt}</p>
                        <div className={styles.comment_actions}>
                            <ReplyAction 
                                onClick={clickReplyHandler} 
                                disabled={showReplyForm}
                            />
                            { user.username === CURRENT_USER.username &&
                                <>
                                    <EditAction />                            
                                    <DeleteAction onClick={clickDeleteHandler} />                            
                                </>
                            }
                        </div>
                    </div>
                    <p className={styles.comment_content}>{content}</p>
                </div>
            </Card>
            { showReplyForm && <ReplyList replies={comment.replies} comment_id={id} /> }
        </div>
    )
}

export default CommentItem;