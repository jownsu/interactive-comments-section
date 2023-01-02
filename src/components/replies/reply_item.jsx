import { useDispatch } from "react-redux";
import { incrementScore, decrementScore } from "../../__reducers/comments/comments.reducer";
import { showDeleteReplyModal } from "../../__reducers/modal/modal.reducer";
import Card from "../global/card/card";
import Score from "../score/score";
import Avatar from "../avatar/avatar"
import { DeleteAction, EditAction } from "../actions/action";
import styles from "./reply_item.module.scss";
import { CURRENT_USER } from "../../assets/data/constants";


const ReplyItem = ({reply}) => {
    const { 
        content, 
        user, 
        createdAt,
        score,
        id,
        comment_id
    } = reply;

    const dispatch = useDispatch();

    const clickPlusHandler = () => {
        dispatch(incrementScore({comment_id, reply_id: id}));
    }

    const clickMinusHandler = () => {
        if(score > 0){
            dispatch(decrementScore({comment_id, reply_id: id}));
        } 
    }

    const clickDeleteHandler = () => {
        dispatch(showDeleteReplyModal({comment_id, id}));
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
        </div>
    )
}

export default ReplyItem;