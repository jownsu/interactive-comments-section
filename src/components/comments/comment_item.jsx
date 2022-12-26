import Card from "../card/card";
import Score from "../score/score";
import Avatar from "../avatar/avatar"
import styles from "./comment_item.module.scss";
import { useState } from "react";
import { ReplyAction } from "../actions/action";


const CommentItem = ({comment}) => {
    const { 
        content, 
        user, 
        createdAt,
        score
    } = comment;

    const [currentScore, setCurrentScore] = useState(score);

    const clickPlusHandler = () => {
        setCurrentScore(prevScore => prevScore + 1);
    }

    const clickMinusHandler = () => {
        if(currentScore > 0) {
            setCurrentScore(prevScore => prevScore - 1);
        }
    }

    return (
        <Card className={styles.comment}>
            <Score 
                score={currentScore} 
                onPlusClick={clickPlusHandler}    
                onMinusClick={clickMinusHandler}    
            />
            <div className={styles.comment_main}>
                <div className={styles.comment_header}>
                    <Avatar 
                        url={user.image.png} 
                        username={user.username} 
                    />
                    <p className={styles.comment_created_at}>{createdAt}</p>
                    <ReplyAction />
                </div>
                <p className={styles.comment_content}>{content}</p>
            </div>
        </Card>
    )
}

export default CommentItem;