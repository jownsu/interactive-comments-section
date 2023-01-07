import { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementScore, decrementScore, updateReply } from "../../__reducers/comments/comments.reducer";
import { showDeleteReplyModal } from "../../__reducers/modal/modal.reducer";
import Card from "../global/card/card";
import Score from "../score/score";
import Avatar from "../avatar/avatar"
import { DeleteAction, EditAction } from "../actions/action";
import UpdateForm from "../forms/update_form/update_form";
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

    const [showUpdateForm, setShowUpdateForm] = useState(false);

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

    const clickEditHandler = () => {
        setShowUpdateForm(true);
    }

    const submitUpdateHandler = (newContent) => {
        dispatch(updateReply({id, comment_id, newContent}));   
        setShowUpdateForm(false);
    }

    const cancelUpdateHandler = () => {
        setShowUpdateForm(false);
    }

    return (
        <div className={styles.reply_container}>
            <Card className={styles.reply}>
                <Score 
                    score={score} 
                    onPlusClick={clickPlusHandler}    
                    onMinusClick={clickMinusHandler}  
                    className={styles.reply_score}  
                />
                <div className={styles.reply_user}>
                    <Avatar 
                        url={user.image} 
                        username={user.username} 
                    />
                    <p className={styles.reply_created_at}>{createdAt}</p>
                </div>
                <div className={styles.reply_actions}>
                    { user.username === CURRENT_USER.username &&
                        <>
                            <EditAction onClick={clickEditHandler} />                            
                            <DeleteAction onClick={clickDeleteHandler} />                            
                        </>
                    }
                </div>

                <div className={styles.reply_content}>
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
        </div>
    )
}

export default ReplyItem;